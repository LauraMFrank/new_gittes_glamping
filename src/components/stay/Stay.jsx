import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'

import styles from '../stay/stay.module.css'


function Stay () {

    return (
        <>
        <section className={styles.container}>
            <h1>Vi har ophold til enhver smag</h1>

            <p>Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.
            Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.</p>
        

        </section>
        </>
    )
}

export default Stay;