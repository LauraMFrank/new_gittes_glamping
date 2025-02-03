import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import NavBar from "../navigation/Navigation";

import styles from './headerstay.module.css'


function HeaderStay () {


    return (
        <>
         <section className={styles.headerContainer}>
            
            <NavBar/>
        
            <header>
                <p>vores ophold</p>
            </header>

         </section>
        </>
    );
};

export default HeaderStay;