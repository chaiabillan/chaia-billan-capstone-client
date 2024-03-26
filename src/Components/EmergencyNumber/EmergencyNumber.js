import './EmergencyNumber.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmergencyNumber() {
    const [countryNames, setCountryNames] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [ambulancePhone, setAmbulancePhone] = useState('');
  
    useEffect(() => {
      // Fetch countries when component mounts
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/emergency-number'); // Assuming endpoint for fetching countries is '/api/countries'
          setCountryNames(response.data.countries);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`http://localhost:8080/api/emergency-number/${selectedCountry}`);
        setAmbulancePhone(response.data.ambulance_phone);
      } catch (error) {
        console.error('Error fetching ambulance phone number:', error);
      }
    };
  
    return (
      <div>
        <form id="countryForm" onSubmit={handleSubmit}>
          <label htmlFor="countrySelect">Select a country:</label>
          <select id="countrySelect" name="countryName" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
            {countryNames.map(countryName => (
              <option key={countryName} value={countryName}>{countryName}</option>
            ))}
          </select>
          <button type="submit">Get Ambulance Phone Number</button>
        </form>
        {ambulancePhone && <p>Ambulance Phone Number for {selectedCountry}: {ambulancePhone}</p>}
      </div>
    );
}

export default EmergencyNumber