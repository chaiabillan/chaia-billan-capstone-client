import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmergencyNumber from '../../Components/EmergencyNumber/EmergencyNumber';
import AllergyCards from '../../Components/AllergyCards/AllergyCards';
import AllergyFriendlyRestaurants from '../../Components/AllergyFriendlyRestaurants/AllergyFriendlyRestaurants';
import './ResourcesPage.scss'
import { useLocation } from 'react-router-dom';
import hero from '../../assets/images/hero-resources.jpeg'
import hero2 from '../../assets/images/resources-allergy-card2.jpeg'
import hero3 from '../../assets/images/IMG_3830.jpeg';
import hero4 from '../../assets/images/resources2.jpeg'


function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selected = searchParams.get('selectedResource');
    setSelectedResource(selected);

    if (selected === 'emergency-number') {
      window.scrollTo(0, 2000);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.search]);


  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  return (
    <>
      <section className='hero'>
        <img className='hero__image hero__image--resources' src={hero4}/>
      </section>
      <section className='introduction'>
        <div className='introduction__text'>
          <p className='introduction__top'>All the resources you need, all in one place!</p>
          <p className='introduction__bottom'>Click on a card to see the info!</p>
        </div>

      </section>
      <section className='resources'>
        <ul className='spotlight spotlight__resources'>
          <li className={`spotlight__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('emergency-number')}>Emergency Number</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-cards')}>Allergy Cards</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>Allergy-Friendly <br></br>Restaurants</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('emergency-number')}>Emergency Number</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-cards')}>Allergy Cards</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>Allergy-Friendly <br></br>Restaurants</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('emergency-number')}>Emergency Number</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-cards')}>Allergy Cards</Link>
          </li>
          <li className={`spotlight__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
            <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>Allergy-Friendly <br></br>Restaurants</Link>
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
