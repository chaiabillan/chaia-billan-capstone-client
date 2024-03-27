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
            <section>
                introduction
            </section>
            <section className='spotlight-section'>
                <p className='spotlight-section__title'>In the spotlight...</p>
                <ul className='spotlight'>
                    <Link to="/resources?selectedResource=emergency-number" className='spotlight__item'>
                        <li>Ambulance Numbers<br></br> from <br></br> Around The World</li>
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