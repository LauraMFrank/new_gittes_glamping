import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'

import HomeHeader from "../homeHeader/HomeHeader";
import styles from '../homeComponents/homecomponents.module.css'


function HomeComponent () {

    return (
        <>
        <section className={styles.container}>
            <h1>Kom og prøv glamping hos Gitte!</h1>

            <p>Vi er stolte af at byde dig velkommen til Gitte's Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.</p>
            
           <div> <img className={styles.gitte} src="public/assets/gitte.jpg" alt="gitte" />
            </div>
                 

            <NavLink>
                <button>
                    SE VORES OPHOLD
                </button>
            </NavLink>
          

        </section>
        </>
    )
}

export default HomeComponent;