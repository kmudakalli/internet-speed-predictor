Internet Speed Predictor App

Stack
React frontend, FastAPI backend, XGBoost model via scikit-learn

Usage
1. Add `best_model.pkl` to `backend/models/`
2. Run `docker-compose up --build`

Frontend
http://localhost:3000

Backend
http://localhost:8000/api/predict

Inputs:
latitude, longitude, upload speed, altency, hour, day of week, connection type, server name

Output:
predicted download speed (mbps)
