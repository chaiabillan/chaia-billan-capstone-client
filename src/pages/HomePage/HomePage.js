import './HomePage.scss'
import { Link } from 'react-router-dom'
import lagos from '../../assets/images/IMG_3999.jpeg'

function HomePage () {

    return (
        <>
            <section className='hero' >
                <img className='hero__image' src={lagos}/>
                <p className='hero__title'>
                    Discover the world without limits. 
                </p>
            </section>
            <section className='introduction'>
                {/* introduction */}
                <p className='introduction__top'>All the resources for traveling with allergies, all in one place.</p>
                <p className='introduction__bottom'> Traveling with food allergies can be scary.  That’s why we’ve created a website that has all the resources you need to achieve peace of mind during your travels. Check out our comprehensive guide and connect with fellow travelers to share experiences.</p>

            </section>
            <section className='spotlight-section'>
                <p className='spotlight-section__title'>In the spotlight...</p>
                <ul className='spotlight'>
                    <Link to="/resources?selectedResource=emergency-number" className='spotlight__item'>
                        <li>Ambulance <br></br>Numbers from <br></br> Around The World</li>
                    </Link>
                    <Link to='/about' className='spotlight__item'>
                        <li>Meet the author!</li>
                    </Link>
                    <Link to='/community' className='spotlight__item'>
                        <li>Connect With<br></br> Fellow Travelers</li>
                    </Link>
                    <Link to ='/travel-guide' className='spotlight__item'>
                        <li>Read the <br></br> comprehensive <br></br> Travel Guide</li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li></li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li></li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li></li>
                    </Link>
                    <Link to='#' className='spotlight__item'>
                        <li></li>
                    </Link>
                </ul>
            </section>
        </>
    )
}

export default HomePage