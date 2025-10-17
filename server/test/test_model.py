import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os
import sys
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

from training.train_model import tree_to_rules

import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
import joblib
from sklearn.tree import _tree

# Paths dataset dan model
DATASET_PATH = os.path.join(BASE_DIR, "dataset", "heart.csv")
MODEL_FULL_PATH = os.path.join(BASE_DIR, "result", "model_full.pkl")
MODEL_SIMPLE_PATH = os.path.join(BASE_DIR, "result", "model_simple.pkl")


def predict_simpel_from_rules(rules_table, input_data):
    """Prediksi pakai rules dari model simpel"""
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
    return 0  # fallback jika tidak ada rules yang cocok


def test_model_full():
    df = pd.read_csv(DATASET_PATH)
    X = df.drop("target", axis=1)
    y = df["target"]

    # Split data untuk evaluasi
    from sklearn.model_selection import train_test_split

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Load model lengkap
    model = joblib.load(MODEL_FULL_PATH)
    y_pred = model.predict(X_test)

    print("=== Test Model Lengkap ===")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Report:\n", classification_report(y_test, y_pred))


def test_model_simpel():
    df = pd.read_csv(DATASET_PATH)
    X = df.drop("target", axis=1)
    y = df["target"]

    from sklearn.model_selection import train_test_split

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Load model simpel
    model = joblib.load(MODEL_SIMPLE_PATH)

    # Ekstrak rules dari model
    rules_table = pd.DataFrame(tree_to_rules(model, list(X.columns)))

    # Prediksi pakai rules
    y_pred = []
    for _, row in X_test.iterrows():
        pred = predict_simpel_from_rules(rules_table, row.to_dict())
        y_pred.append(pred)

    print("=== Test Model Simpel (Rules) ===")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Report:\n", classification_report(y_test, y_pred))


if __name__ == "__main__":
    test_model_full()
    print("\n")
    test_model_simpel()
