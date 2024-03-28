import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmergencyNumber from '../../Components/EmergencyNumber/EmergencyNumber';
import AllergyCards from '../../Components/AllergyCards/AllergyCards';
import AllergyFriendlyRestaurants from '../../Components/AllergyFriendlyRestaurants/AllergyFriendlyRestaurants';
import './ResourcesPage.scss'
import { useLocation } from 'react-router-dom';
import resourcesHero from '../../assets/images/hero-resources.jpeg'


function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selected = searchParams.get('selectedResource');
    setSelectedResource(selected);
  }, [location.search]);


  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  return (
    <>
      <section className='hero'>
        <img className='hero__image hero__image--resources' src={resourcesHero}/>
      </section>
      <section>
        <p>All the resources you need, all in one place!</p>
      </section>
      <section className='resources'>
        
        <ul className='resources-list'>
          <li className={`resources-list__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('emergency-number')}>Emergency Number</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('allergy-cards')}>Allergy Cards</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>Allergy-Friendly <br></br>Restaurants</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('emergency-number')}>Emergency Number</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('allergy-cards')}>Allergy Cards</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>Allergy-Friendly <br></br>Restaurants</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('emergency-number')}>Emergency Number</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('allergy-cards')}>Allergy Cards</Link>
          </li>
          <li className={`resources-list__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
            <Link to="#" className='resources-list__item--link' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>Allergy-Friendly <br></br>Restaurants</Link>
          </li>
        </ul>
      </section>
      <section>
        {selectedResource === 'emergency-number' && <EmergencyNumber />}
        {selectedResource === 'allergy-cards' && <AllergyCards />}
        {selectedResource === 'allergy-friendly-restaurants' && <AllergyFriendlyRestaurants />}
      </section>
    </>
  );
}

export default ResourcesPage;
