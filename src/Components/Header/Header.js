import './Header.scss'
import { Link } from 'react-router-dom'

function Header () {

    return (
        <section className='nav-bar'>
            <Link to='/travel-guide' className='nav-bar__option'>
                Travel Guide
            </Link>
            <Link to='/community' className='nav-bar__option'>
                Community
            </Link>
            <Link to='/' className='nav-bar__option nav-bar__option--title '>
                SafeTravels Allergy Compass
            </Link>
            <Link to='/resources' className='nav-bar__option'>
                Resources
            </Link>
            <Link to='/about' className='nav-bar__option'>
                About
            </Link>
        </section>
    )
}

export default Header