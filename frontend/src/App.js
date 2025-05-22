import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    upload_speed: "",
    latency: "",
    hour: "",
    day_of_week: "",
    connection_type: "",
    server_name: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setResult(data.predicted_download_speed);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Predict Download Speed</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={formData[key]}
            placeholder={key.replace(/_/g, " ")}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Predict</button>
      </form>
      {result !== null && (
        <div style={{ marginTop: "2rem" }}>
          <strong>Predicted Download Speed:</strong> {result} Mbps
        </div>
      )}
    </div>
  );
}

export default App;