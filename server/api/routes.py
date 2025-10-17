from flask import Blueprint, request, jsonify
import pandas as pd
import joblib
import os
from sklearn.tree import _tree
from .utils import load_model  # bisa dipakai untuk full model jika ada

api_bp = Blueprint("api", __name__)

# Paths model
BASE_DIR = os.path.dirname(__file__)
MODEL_FULL_PATH = os.path.join(BASE_DIR, "..", "result", "model_full.pkl")
MODEL_SIMPLE_PATH = os.path.join(BASE_DIR, "..", "result", "model_simple.pkl")

# Load model full di awal
model_full = joblib.load(MODEL_FULL_PATH)

# Feature columns sesuai dataset
FEATURE_COLUMNS = [
    "age",
    "sex",
    "cp",
    "trestbps",
    "chol",
    "fbs",
    "restecg",
    "thalach",
    "exang",
    "oldpeak",
    "slope",
    "ca",
    "thal",
]


# Fungsi untuk extract rules dari model
def tree_to_rules(tree, feature_names):
    tree_ = tree.tree_
    feature_name = [
        feature_names[i] if i != _tree.TREE_UNDEFINED else "undefined!"
        for i in tree_.feature
    ]

    rules = []

    def recurse(node, conditions):
        if tree_.feature[node] != _tree.TREE_UNDEFINED:
            name = feature_name[node]
            threshold = tree_.threshold[node]
            recurse(
                tree_.children_left[node], conditions + [f"{name} <= {threshold:.2f}"]
            )
            recurse(
                tree_.children_right[node], conditions + [f"{name} > {threshold:.2f}"]
            )
        else:
            value = tree_.value[node]
            class_id = value.argmax()
            rules.append({"IF": " AND ".join(conditions), "THEN": f"class {class_id}"})

    recurse(0, [])
    return rules


# Fungsi prediksi rules
def predict_simpel_from_rules(rules_table, input_data):
    for _, row in rules_table.iterrows():
        conditions = row["IF"].split(" AND ")
        match = True
        for cond in conditions:
            feat, op, thresh = cond.split()
            thresh = float(thresh)
            val = float(input_data.get(feat, 0))
            if op == "<=" and not val <= thresh:
                match = False
                break
            elif op == ">" and not val > thresh:
                match = False
                break
        if match:
            return int(row["THEN"].split()[-1])
    return 0


# Load model simple + rules di awal
model_simple = joblib.load(MODEL_SIMPLE_PATH)
rules_simple = pd.DataFrame(tree_to_rules(model_simple, FEATURE_COLUMNS))


@api_bp.route("/predict/full", methods=["POST"])
def predict_full():
    data = request.get_json()
    features = pd.DataFrame([{col: data.get(col) for col in FEATURE_COLUMNS}])
    prediction = model_full.predict(features)[0]
    return jsonify({"prediction": int(prediction)})


@api_bp.route("/predict/simple", methods=["POST"])
def predict_simple():
    data = request.get_json()
    pred = predict_simpel_from_rules(rules_simple, data)
    return jsonify({"prediction": int(pred)})
