# Internet Speed Predictor App

## Stack
React frontend, FastAPI backend, XGBoost model via scikit-learn

## Usage
1. Add `best_model.pkl` to `backend/models/`
2. Run `docker-compose up --build`

## Frontend
http://localhost:3000

## Backend
http://localhost:8000/api/predict

## Inputs
- Latitude
- Longitude
- Upload Speed
- Latency
- Hour
- Day of Week
- Connection Type
- Server Name

## Output
- Predicted Download Speed (Mbps)