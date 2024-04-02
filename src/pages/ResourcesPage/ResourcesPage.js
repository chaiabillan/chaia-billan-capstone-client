import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmergencyNumber from '../../Components/EmergencyNumber/EmergencyNumber';
import AllergyCards from '../../Components/AllergyCards/AllergyCards';
import AllergyFriendlyRestaurants from '../../Components/AllergyFriendlyRestaurants/AllergyFriendlyRestaurants';
import './ResourcesPage.scss'
import { useLocation } from 'react-router-dom';
import hero from '../../assets/images/resources2.jpeg'
import Yummly from '../../Components/Yummly/Yummly';


function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selected = searchParams.get('selectedResource');
    setSelectedResource(selected);

    if (selected === 'emergency-number' || selected === 'allergy-cards' || selected === 'yummly' || selected === 'allergy-friendly-restaurants') {
      setTimeout(() => {
        window.scrollTo(0, 450);
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.search]);


  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setTimeout(() => {
      window.scrollTo(0, 450);
    }, 50);
  };

  return (
    <>
      <section className='hero'>
        <img className='hero__image hero__image--resources' src={hero} alt='picnic'/>
        <p className='hero__title--resources'>Resources</p>
      </section>
      <section className='introduction'>
        <div className='introduction__text'>
          <p className='introduction__top'>All the resources you need, all in one place!</p>
          <p className='introduction__bottom'>Click on a card to see the info!</p>
        </div>

      </section>
      <section className='resources'>
        <ul className='spotlight spotlight__resources'>
          <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('emergency-number')}>
            <li className={`spotlight__item ${selectedResource === 'emergency-number' ? 'selected' : ''}`}>
              Emergency <br></br> Number
            </li>
          </Link>
          <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-cards')}>
            <li className={`spotlight__item ${selectedResource === 'allergy-cards' ? 'selected' : ''}`}>
              Chef Cards
            </li>
          </Link>
          <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('allergy-friendly-restaurants')}>
            <li className={`spotlight__item ${selectedResource === 'allergy-friendly-restaurants' ? 'selected' : ''}`}>
              Spokin
            </li>
          </Link>
          <Link to="#" className='spotlight__item--text spotlight__item--text--resources' onClick={() => handleResourceClick('yummly')}>
            <li className={`spotlight__item ${selectedResource === 'yummly' ? 'selected' : ''}`}>
              Yummly
            </li>
          </Link>

        </ul>
      </section>
      <section>
        {selectedResource === 'emergency-number' && <EmergencyNumber />}
        {selectedResource === 'allergy-cards' && <AllergyCards />}
        {selectedResource === 'allergy-friendly-restaurants' && <AllergyFriendlyRestaurants />}
        {selectedResource === 'yummly' && <Yummly />}

      </section>
    </>
  );
}

export default ResourcesPage;
