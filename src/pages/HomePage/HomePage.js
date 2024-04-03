import './HomePage.scss'
import { Link } from 'react-router-dom'
import lagos from '../../assets/images/IMG_3999.jpeg'
import logo from '../../assets/images/Designer.svg'
import gif from '../../assets/images/IMG_4023.gif'

function HomePage () {

    return (
        <>
            <section className='hero' >
                <img className='hero__image hero__image--homepage' src={lagos} alt='lagos, portugal'/>
                {/* <img className='hero__image hero__image--homepage' src={gif} alt='lagos, portugal'/> */}

                <p className='hero__title hero__title--homepage'>
                    Discover the world without limits. 
                </p>
            </section>
            <section className='introduction introduction__home'>
                <div className='introduction__text'>
                    <p className='introduction__top'>All the resources for traveling with allergies, all in one place.</p>
                    <p className='introduction__bottom'>
                        Traveling with food allergies can be scary.  This website provides all the resources you need to achieve 
                        peace of mind during your travels. Check out 
                        our <Link to='/travel-guide' className='link'> comprehensive travel guide</Link> and <Link to='/community' className='link'>connect with fellow travelers</Link> to share experiences.</p>
                </div>
                <img src={logo} alt='logo' className='introduction__logo' />
            </section>
            <section className='spotlight-section'>
                <p className='spotlight-section__title'>In the spotlight...</p>
                <ul className='spotlight'>
                    <Link to="/resources?selectedResource=emergency-number" className='spotlight__item'>
                        <li className='spotlight__item--text'>Ambulance <br></br>Numbers from <br></br> Around The World</li>
                    </Link>
                    <Link to='/community' className='spotlight__item'>
                        <li className='spotlight__item--text'>Connect with<br></br> Fellow Travelers</li>
                    </Link>
                    <Link to ='/travel-guide' className='spotlight__item'>
                        <li className='spotlight__item--text'>Read the <br></br> Comprehensive <br></br> Travel Guide</li>
                    </Link>
                    <Link to='/resources?selectedResource=allergy-cards' className='spotlight__item'>
                        <li className='spotlight__item--text'>Create Custom <br></br> Allergy Cards</li>
                    </Link>
                    <Link to='/resources?selectedResource=allergy-friendly-restaurants' className='spotlight__item'>
                        <li className='spotlight__item--text'>Check Out <br></br> Spokin.com</li>
                    </Link>
                    <Link to='/about' className='spotlight__item'>
                        <li className='spotlight__item--text'>Meet the Author!</li>
                    </Link>
                </ul>
            </section>
        </>
    )
}

export default HomePage