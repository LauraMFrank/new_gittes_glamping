import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'

import styles from "./navigation.module.css"


function NavBar () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navBar}>

            <NavLink to='/' onClick={'navLogo'}>
              <img className={styles.navLogo} src="../assets/logo.png" alt="logo" />
            </NavLink>

            <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="#ffffff">
            <path d="M242.7 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.27 75.93 89.2c-12.28-12.28-32.19-12.28-44.48 0L9.2 111.44c-12.28 12.28-12.28 32.19 0 44.48L109.27 256 9.2 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.19 12.28 44.48 0L176 322.73l100.07 100.07c12.28 12.28 32.19 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.7 256z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ffffff">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        )}
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li>
          <NavLink to='/Stays' onClick={toggleMenu}>Ophold</NavLink>
        </li>
        <li>
          <NavLink to='/Contacts' onClick={toggleMenu}>kontakt</NavLink>
        </li>
        <li>
          <NavLink to='/Activities' onClick={toggleMenu}>Aktiviteter</NavLink>
        </li>
        <li>
          <NavLink to='/Backoffice' onClick={toggleMenu}>Backoffice</NavLink>
        </li>
      </ul>
    </nav>

       
    );

};

export default NavBar;