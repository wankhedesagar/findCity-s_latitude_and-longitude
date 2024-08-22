import React, { useState } from "react";

const CityGeocoder = ({ apikey }) => {
  const API_KEY = '';
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
  
        if (data.results.length > 0) {
          const location = data.results[0].geometry;
          setLatitude(location.lat);
          setLongitude(location.lng);
        } else {
          setError("City not found.");
        }
      } catch (err) {
        setError("Error fetching data.");
      }

  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Get Coordinates</button>
      </form>

      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
export default CityGeocoder;
