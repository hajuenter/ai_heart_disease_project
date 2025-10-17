import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, _tree
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

# Path dataset dan model
BASE_DIR = os.path.dirname(__file__)
DATASET_PATH = os.path.join(BASE_DIR, "..", "dataset", "heart.csv")
MODEL_PATH_FULL = os.path.join(BASE_DIR, "..", "result", "model_full.pkl")
MODEL_PATH_SIMPLE = os.path.join(BASE_DIR, "..", "result", "model_simple.pkl")


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


def train_model_full(max_depth=5):
    df = pd.read_csv(DATASET_PATH)
    X = df.drop("target", axis=1)
    y = df["target"].copy()

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    model = DecisionTreeClassifier(max_depth=max_depth, random_state=42)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    print("=== Full Model ===")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Report:\n", classification_report(y_test, y_pred))

    joblib.dump(model, MODEL_PATH_FULL)
    print(f"✅ Full model saved at {MODEL_PATH_FULL}")

    return model


def train_model_simple(max_depth=3):
    df = pd.read_csv(DATASET_PATH)
    X = df.drop("target", axis=1)
    y = df["target"].copy()

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    model = DecisionTreeClassifier(max_depth=max_depth, random_state=42)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    print("=== Simple Model ===")
    print("Accuracy:", accuracy_score(y_test, y_pred))
    print("Report:\n", classification_report(y_test, y_pred))

    # Fitur yang dipakai/tidak dipakai
    all_features = set(X.columns)
    used_features = set(
        [X.columns[i] for i in model.tree_.feature if i != _tree.TREE_UNDEFINED]
    )
    unused_features = all_features - used_features
    print("Fitur yang dipakai:", used_features)
    print("Fitur yang tidak dipakai:", unused_features)

    # Ekstrak rules
    rules = tree_to_rules(model, list(X.columns))
    rules_table = pd.DataFrame(rules)
    print("\nRules Table:\n", rules_table)

    # Simpan model
    joblib.dump(model, MODEL_PATH_SIMPLE)
    print(f"✅ Simple model saved at {MODEL_PATH_SIMPLE}")

    return model, rules_table, used_features, unused_features


if __name__ == "__main__":
    train_model_full()
    train_model_simple()
