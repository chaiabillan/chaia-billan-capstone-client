import './TravelGuidePage.scss'
import hero from '../../assets/images/hero-travel-guide.jpeg'
import arrow from '../../assets/images/down-arrow.svg'
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
                <img className='hero__image hero__image--guide' src={hero} />
                <p className='hero__title hero__title--travel-guide'>Travel Guide</p>
            </section>
            <section className='introduction'>
                <div className='introduction__text'>
                    <p className='introduction__top'>
                        This comprehensive travel guide provides tips and advice in regards to how to stay
                        safe while traveling with food allergies.
                    </p>
                    <p className='introduction__bottom'>
                        You can find information on flights, eating at restaurants and more!
                    </p>
                </div>
            </section>
            <section className='flights guide'>
                <div className='guide__dropdown'>
                    <p className='guide__dropdown--title'>Staying safe on flights</p>
                    <Link to='#' onClick={() => handleSectionClick('flights')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} >
                        {/* <img className='guide__dropdown--arrow' src={arrow} /> */}
                        <div className='guide__dropdown--arrow--new'></div>
                    </Link>
                </div>
                {showSection === 'flights' &&
                    <FlightInfo/>
                }
            </section>
            <section className='restaurant guide'>
                <div className='guide__dropdown'>
                    <p className='guide__dropdown--title'>Eating at Restaurants</p>
                    <Link to='#' onClick={() => handleSectionClick('restaurant')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} >
                        <div className='guide__dropdown--arrow--new'></div>
                    </Link>
                </div>
                {showSection === 'restaurant' &&
                    <RestaurantInfo/>
                }
            </section>
            <section className='flights guide'>
                <div className='guide__dropdown'>
                    <p className='guide__dropdown--title'>Cooking</p>
                    <Link to='#' onClick={() => handleSectionClick('cooking')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} >
                        <div className='guide__dropdown--arrow--new'></div>
                    </Link>                </div>
                {showSection === 'cooking' &&
                    <CookingInfo/>
                }
            </section>
            <section className='emergencies guide'>
                <div className='guide__dropdown'>
                    <p className='guide__dropdown--title'>Emergencies</p>
                    <Link to='#' onClick={() => handleSectionClick('emergencies')} className={`${showSection === 'flights' ? 'selected-section' : ''}`} >
                        <div className='guide__dropdown--arrow--new'></div>
                    </Link>                                
                </div>
                {showSection === 'emergencies' &&
                    <EmergencyInfo />
                }
            </section>
        </>
    )
}

export default TravelGuidePage