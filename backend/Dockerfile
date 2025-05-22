FROM python:3.11-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir fastapi uvicorn pandas scikit-learn joblib pydantic xgboost

CMD ["uvicorn", "predict_api:app", "--host", "0.0.0.0", "--port", "8000"]
