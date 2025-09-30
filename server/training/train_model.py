import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

# Path dataset
DATASET_PATH = os.path.join(os.path.dirname(__file__), "..", "dataset", "heart.csv")
MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "result", "model.pkl")


def train_model():
    # Baca dataset
    df = pd.read_csv(DATASET_PATH)

    # Pisahkan fitur dan target
    X = df.drop("target", axis=1)
    y = df["target"]

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Buat model Decision Tree
    model = DecisionTreeClassifier(max_depth=5, random_state=42)
    model.fit(X_train, y_train)

    # Evaluasi
    y_pred = model.predict(X_test)
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Report:\n", classification_report(y_test, y_pred))

    # Simpan model
    joblib.dump(model, MODEL_PATH)
    print(f"✅ Model saved at {MODEL_PATH}")


if __name__ == "__main__":
    train_model()
