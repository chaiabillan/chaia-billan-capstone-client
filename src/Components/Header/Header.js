import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import dropdownMenu from '../../assets/images/menu-list-dropdown.svg'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from 'react-bootstrap-icons';


function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <section className='nav-bar'>
             <div className='nav-bar__dropdown'>
                    {/* <img href='#' className='nav-bar__dropdown--button' src={dropdownMenu} onClick={toggleDropdown}/> */}
                    < List className='nav-bar__dropdown--button' onClick={toggleDropdown} />
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
                <Link to='/travel-guide' className={`nav-bar__option ${location.pathname === '/travel-guide' ? 'navigate' : ''}`}>
                    Travel Guide
                </Link>
                <Link to='/community' className={`nav-bar__option ${location.pathname === '/community' ? 'navigate' : ''}`}>
                    Community
                </Link>
                <Link to='/' className={`nav-bar__option nav-bar__option--title ${location.pathname === '/' ? 'navigate' : ''}`}>
                    My Allergy Compass
                </Link>
                <Link to='/resources' className={`nav-bar__option ${location.pathname === '/resources' ? 'navigate' : ''}`}>
                    Resources
                </Link>
                <Link to='/about' className={`nav-bar__option ${location.pathname === '/about' ? 'navigate' : ''}`}>
                    About
                </Link>
            </div>

        </section>
    )
}

export default Header