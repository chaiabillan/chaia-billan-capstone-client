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
        <>
        <section className='ambulance-number'>
            <button className='ambulance-number__back'> Back</button>
            <p className='ambulance-number__title'>Did you know that every country has a different phone number (9-1-1 equivalent) to reach emergency services?</p>
            <p className='ambulance-number__subtitle'>This resource will help you explore the different phone numbers that countries use to reach an ambulance in case of an emergency</p>
            <form className='get-number-form'id="countryForm" onSubmit={handleSubmit}>
                <label  className='get-number-form__title' htmlFor="countrySelect">What country are you visiting?</label>
                <select className='get-number-form__dropdown' id="countrySelect" name="countryName" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    {countryNames.map(countryName => (
                        <option className='get-number-form__dropdown--options' key={countryName} value={countryName}>{countryName}</option>
                    ))}
                </select>
                <button  className='get-number-form__submit' type="submit">Submit</button>
            </form>
            <section className='information'>
                {ambulancePhone && <>
                    <p className='information__title'>This is the phone number to call an ambulance:</p> 
                    <p className='information__number'> {ambulancePhone}</p>
                </>}
                <p  className='information__save'>Save this number in your contacts in case of an allergy-related emergency!</p>
                <p  className='information__disclaimer'>
                    This data is provided without any claims of accuracy, you should use this data as guidance, and do your own due diligence
                </p>
            </section>
        </section>
            
        </>
    );
}

export default EmergencyNumber