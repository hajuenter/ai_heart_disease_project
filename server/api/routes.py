from flask import Blueprint, request, jsonify
from .utils import load_model

api_bp = Blueprint("api", __name__)
model = load_model()


@api_bp.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    features = [
        data.get("age"),
        data.get("sex"),
        data.get("cp"),
        data.get("trestbps"),
        data.get("chol"),
        data.get("fbs"),
        data.get("restecg"),
        data.get("thalach"),
        data.get("exang"),
        data.get("oldpeak"),
        data.get("slope"),
        data.get("ca"),
        data.get("thal"),
    ]

    prediction = model.predict([features])[0]
    return jsonify({"prediction": int(prediction)})
