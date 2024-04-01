import './TravelGuidePage.scss'
import hero from '../../assets/images/hero-travel-guide.jpeg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FlightInfo from '../../Components/FlightInfo/FlightInfo'
import RestaurantInfo from '../../Components/RestaurantInfo/RestaurantInfo'
import CookingInfo from '../../Components/CookingInfo/CookingInfo'
import EmergencyInfo from '../../Components/EmergencyInfo/EmergencyInfo'


function TravelGuidePage() {
    const [showSection, setShowSection] = useState(false);

    const handleSectionClick = (section) => {
        setShowSection(showSection !== section ? section : null);
    }

    return (
        <>
            <section className='hero'>
                <img className='hero__image hero__image--guide' src={hero} alt='bakery'/>
                <p className='hero__title hero__title--travel-guide'>Travel Guide</p>
            </section>
            <section className='introduction'>
                <div className='introduction__text'>
                    <p className='introduction__top'>
                        Dive into our comprehensive travel guide, carefully crafted to equip you with tips and advice for navigating the world with food allergies safely.
                    </p>
                    <p className='introduction__bottom'>
                        Embark on your journey with confidence as we provide detailed insights on various aspects of travel, including securing 
                        safe accommodations on flights, navigating dining options at restaurants, and much more. Whether you're soaring through 
                        the skies or exploring local eateries, our guide ensures you're well-prepared to enjoy your travels while prioritizing your health and safety.
                    </p>
                </div>
            </section>
            <section className='flights guide'>
                <Link to='#' onClick={() => handleSectionClick('flights')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} style={{ textDecoration: 'none' }}>
                    <div className='guide__dropdown'>
                        <p className='guide__dropdown--title'>Staying safe on flights</p>
                        <div className='guide__dropdown--arrow--new'></div>
                    </div>
                </Link>
                {showSection === 'flights' &&
                    <FlightInfo />
                }
            </section>
            <section className='restaurant guide'>
                <Link to='#' onClick={() => handleSectionClick('restaurant')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} style={{ textDecoration: 'none' }}>

                    <div className='guide__dropdown'>
                        <p className='guide__dropdown--title'>Eating at Restaurants</p>
                        <div className='guide__dropdown--arrow--new'></div>
                    </div>
                </Link>
                {showSection === 'restaurant' &&
                    <RestaurantInfo />
                }
            </section>
            <section className='flights guide'>
                <Link to='#' onClick={() => handleSectionClick('cooking')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} style={{ textDecoration: 'none' }}>
                    <div className='guide__dropdown'>
                        <p className='guide__dropdown--title'>Cooking</p>
                        <div className='guide__dropdown--arrow--new'></div>
                    </div>
                </Link>
                {showSection === 'cooking' &&
                    <CookingInfo />
                }
            </section>
            <section className='emergencies guide'>
                <Link to='#' onClick={() => handleSectionClick('emergencies')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} style={{ textDecoration: 'none' }}>
                    <div className='guide__dropdown'>
                        <p className='guide__dropdown--title'>Emergencies</p>
                        <div className='guide__dropdown--arrow--new'></div>
                    </div>
                </Link>
                {showSection === 'emergencies' &&
                    <EmergencyInfo />
                }
            </section>
        </>
    )
}

export default TravelGuidePage