import './HomePage.scss'
import { Link } from 'react-router-dom'
import lagos from '../../assets/images/IMG_3999.jpeg'
import logo from '../../assets/images/Designer.svg'
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';




function HomePage () {
    // const { pathname } = useLocation();


    // // const history = useHistory();

    // const handleAmbulanceNumbersClick = () => {
    //     // Navigate to the Ambulance Numbers page
    //     window.location.href = "/resources?selectedResource=emergency-number";
    // };

    // useEffect(() => {
    //     // Scroll to a specific position when handleAmbulanceNumbersClick is triggered
    //     if (pathname === "/resources?selectedResource=emergency-number" && window.scrollY === 0) {
    //         // Scroll to a position lower than 0,0 (e.g., 500 pixels)
    //         window.scrollTo(0, 500);
    //     }
    // }, [pathname]);

    return (
        <>
            <section className='hero' >
                <img className='hero__image hero__image--homepage' src={lagos}/>
                <p className='hero__title hero__title--homepage'>
                    Discover the world without limits. 
                </p>
            </section>
            <section className='introduction'>
                {/* introduction */}
                <div className='introduction__text'>
                    <p className='introduction__top'>All the resources for traveling with allergies, all in one place.</p>
                    <p className='introduction__bottom'> Traveling with food allergies can be scary.  That’s why I’ve created a website that has all the resources you need to achieve peace of mind during your travels. Check out our comprehensive guide and connect with fellow travelers to share experiences.</p>
                </div>
                <img src={logo} className='introduction__logo' />
            </section>
            <section className='spotlight-section'>
                <p className='spotlight-section__title'>In the spotlight...</p>
                <ul className='spotlight'>
                    <Link to="/resources?selectedResource=emergency-number" className='spotlight__item'>
                        <li className='spotlight__item--text'>Ambulance <br></br>Numbers from <br></br> Around The World</li>
                    </Link>
                    {/* <li className='spotlight__item'>
                        <div className='spotlight__item--text' onClick={handleAmbulanceNumbersClick}>
                            Ambulance<br />Numbers from<br />Around The World
                        </div>
                    </li> */}
                    <Link to='/about' className='spotlight__item'>
                        <li className='spotlight__item--text'>Meet the Author!</li>
                    </Link>
                    <Link to='/community' className='spotlight__item'>
                        <li className='spotlight__item--text'>Connect with<br></br> Fellow Travelers</li>
                    </Link>
                    <Link to ='/travel-guide' className='spotlight__item'>
                        <li className='spotlight__item--text'>Read the <br></br> Comprehensive <br></br> Travel Guide</li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li className='spotlight__item--text'></li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li className='spotlight__item--text'></li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li className='spotlight__item--text'></li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li className='spotlight__item--text'></li>
                    </Link>
                </ul>
            </section>
            {/* {scrollToTop} */}

        </>
    )
}

export default HomePage