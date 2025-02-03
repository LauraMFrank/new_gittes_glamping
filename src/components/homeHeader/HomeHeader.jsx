import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import NavBar from "../navigation/Navigation";

import styles from "../homeHeader/homeheader.module.css"


function HomeHeader () {

    return (
    <>
        <section className={styles.headerContainer}>

        <NavBar/>

        <header>
            <img src="../assets/logo.png" alt="" />
            
                <h1>Gittes</h1>
                <p>Glamping</p>
                
           
            <Link className={styles.links}>
            <button className={styles.button}>BOOK NU</button>
            </Link>
        </header>

        </section>
    </>
    );
};

export default HomeHeader;

