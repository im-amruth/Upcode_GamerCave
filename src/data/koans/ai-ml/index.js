export const aiMlKoans = [
  {
    id: "ai-ml-koan-1",
    title: "Import and Load Data",
    description: "Learn how to load and explore data efficiently using Pandas.",
    difficulty: "easy",
    task: "Load a CSV file using pandas and print the first 5 rows.",
    hint: "Use pandas.read_csv() and head().",
    initialCode: `import pandas as pd

# Load the CSV
# Your code here

# Print first 5 rows
`,
    solution: `import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())`,
  },
  {
    id: "ai-ml-koan-2",
    title: "Train a Simple Linear Regression Model",
    description: "Understand how to train a basic linear regression model for prediction.",
    difficulty: "medium",
    task: "Train a Linear Regression model to predict 'y' from 'x'.",
    hint: "Use scikit-learn's LinearRegression.",
    initialCode: `from sklearn.linear_model import LinearRegression

# Your data
X = [[1], [2], [3], [4]]
y = [2, 4, 6, 8]

# Train model
# Your code here
`,
    solution: `from sklearn.linear_model import LinearRegression

X = [[1], [2], [3], [4]]
y = [2, 4, 6, 8]

model = LinearRegression()
model.fit(X, y)

print(model.predict([[5]]))  # Output: ~10
`,
  },
  {
    id: "ai-ml-koan-3",
    title: "Normalize Data",
    description: "Master data normalization to scale features for better model performance.",
    difficulty: "medium",
    task: "Normalize a list of numbers between 0 and 1.",
    hint: "Use sklearn.preprocessing.MinMaxScaler.",
    initialCode: `from sklearn.preprocessing import MinMaxScaler
import numpy as np

data = np.array([[10], [20], [30], [40]])

# Your code here
`,
    solution: `from sklearn.preprocessing import MinMaxScaler
import numpy as np

data = np.array([[10], [20], [30], [40]])

scaler = MinMaxScaler()
normalized = scaler.fit_transform(data)
print(normalized)
`,
  },
  {
    id: "ai-ml-koan-4",
    title: "Integrate AI Prediction",
    description: "Combine training and inference to make real-time predictions using AI models.",
    difficulty: "hard",
    task: "Use a trained model to predict user age from input height.",
    hint: "Use model.predict() with sample input.",
    initialCode: `from sklearn.linear_model import LinearRegression

heights = [[150], [160], [170], [180]]
ages = [20, 25, 30, 35]

# Train and predict
`,
    solution: `from sklearn.linear_model import LinearRegression

heights = [[150], [160], [170], [180]]
ages = [20, 25, 30, 35]

model = LinearRegression()
model.fit(heights, ages)

print(model.predict([[175]]))  # Example prediction
`,
  },
];
