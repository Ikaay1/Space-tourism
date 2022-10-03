import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im';
import Fade from 'react-reveal/Fade';

import './navbar.css';

const data = [
    {link: '/', text: 'HOME', index: '00'},
    {link: '/destination', text: 'DESTINATION', index: '01'},
    {link: '/crew', text: 'CREW', index: '02'},
    {link: '/technology', text: 'TECHNOLOGY', index: '03'},
];

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <div className='nav'>
            <div className='logoDiv'>
                <NavLink to='/'>
                    <img src='/assets/logo.png' alt='' />
                </NavLink>
            </div>
            <div className='navMenu'>
                {data.map((item) => (
                    <div className='navLink' key={item.text}>
                        <NavLink className='link' to={item.link} end>
                            <span style={{marginRight: '.1rem'}}>
                                {item.index}
                            </span>
                            {item.text}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className='hamburgerDiv' onClick={() => setShowNavbar(true)}>
                <AiOutlineMenu className='hamburger' />
            </div>
            <Fade right when={showNavbar}>
                <div className={!showNavbar ? 'mobileNav' : 'mobileNav active'}>
                    {data.map((item) => (
                        <div className='mobileNavLink' key={item.text}>
                            <NavLink className='mobileLinks' to={item.link} end>
                                <span style={{marginRight: '.25rem'}}>
                                    {item.index}
                                </span>
                                {item.text}
                            </NavLink>
                        </div>
                    ))}
                    <div
                        className='closeDiv'
                        onClick={() => setShowNavbar(false)}
                    >
                        <ImCancelCircle className='close' />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Navbar;
