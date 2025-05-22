from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
import os

app = FastAPI()
model = joblib.load(os.path.join("models", "best_model.pkl"))

class SpeedInput(BaseModel):
    latitude: float
    longitude: float
    upload_speed: float
    latency: int
    hour: int
    day_of_week: int
    connection_type: str
    server_name: str

@app.post("/api/predict")
def predict_speed(data: SpeedInput):
    input_df = pd.DataFrame([{
        "Latitude": data.latitude,
        "Longitude": data.longitude,
        "Upload Speed (Megabits per second)": data.upload_speed,
        "Latency (Milliseconds)": data.latency,
        "Hour": data.hour,
        "DayOfWeek": data.day_of_week,
        "Connection Type": data.connection_type,
        "Server Name": data.server_name,
        "Minute": 0,
        "Day": 1,
        "Month": 1,
        "Year": 2025,
        "IsWeekend": 0,
        "PartOfDay": "Afternoon",
        "Region": "2-3",
        "IP_Block": "192.168"
    }])
    prediction = model.predict(input_df)[0]
    return {"predicted_download_speed": round(prediction, 2)}
