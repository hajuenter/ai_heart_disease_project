import pandas as pd
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

DATASET_PATH = os.path.join(os.path.dirname(__file__), "..", "dataset", "heart.csv")
MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "result", "model.pkl")


def test_model():
    # Load dataset
    df = pd.read_csv(DATASET_PATH)
    X = df.drop("target", axis=1)
    y = df["target"]

    # Load model
    model = joblib.load(MODEL_PATH)

    # Prediksi
    y_pred = model.predict(X)

    # Evaluasi
    print("Accuracy:", accuracy_score(y, y_pred))
    print("Report:\n", classification_report(y, y_pred))


if __name__ == "__main__":
    test_model()
