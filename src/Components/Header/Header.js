import './Header.scss'
import { Link } from 'react-router-dom'
import dropdownMenu from '../../assets/images/menu-list-dropdown.svg'
import dropdown2 from '../../assets/images/dropdown2.jpeg'
import { useState } from 'react'

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <section className='nav-bar'>
             <div className='nav-bar__dropdown'>
                    <img href='#' className='nav-bar__dropdown--button' src={dropdownMenu} onClick={toggleDropdown}/>
                <div className={`nav-bar__dropdown-content ${dropdownOpen ? 'open' : ''}`} onClick={closeDropdown}>
                    <Link to='/' className='nav-bar__dropdown-content--link'>
                        Home
                    </Link>
                    <Link to='/travel-guide' className='nav-bar__dropdown-content--link'>
                        Travel Guide
                    </Link>
                    <Link to='/community' className='nav-bar__dropdown-content--link'>
                        Community
                    </Link>
                    <Link to='/resources' className='nav-bar__dropdown-content--link'>
                        Resources
                    </Link>
                    <Link to='/about' className='nav-bar__dropdown-content--link'>
                        About
                    </Link>
                </div>
            </div>
            <div className='nav-bar__tablet'>
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
            </div>

        </section>
    )
}

export default Header