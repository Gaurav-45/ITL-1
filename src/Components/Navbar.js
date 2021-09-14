import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [toggle, setToggle] = useState(true);

    function handleClick(){
        return setToggle(!toggle);
    }

    return (
        <nav className={toggle?"nav not-visible":"nav"}>
            <div className="nav-menu flex-row">
                <div className="nav-logo">
                    <Link to="/" className="logo link">ReadME</Link>
                </div>
                <div className="toggle-collapse">
                    <div className="toggle-icon">
                        <FontAwesomeIcon className="menu-icon" icon={faBars} onClick={handleClick}/>
                    </div>
                </div>
                <div>
                    <ul className="nav-items flex-row">
                        <li className="nav-link">
                            <Link to="/"  className="link">HOME</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/about"  className="link">ABOUT</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contact" className="link" >CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

