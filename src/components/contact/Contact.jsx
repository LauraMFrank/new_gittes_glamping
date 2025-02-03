import React from "react";
import styles from "./Contact.module.css";
import NavBar from "../navigation/Navigation";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
       <section className={styles.headerContainer}>
            
            <NavBar/>
        
            <header>
                <p>Kontakt Gitte</p>
            </header>

         </section>

      <div className={styles.content}>
        <h2>Vil du booke et ophold?</h2>
        <h2> Eller har du blot et spørgsmål?</h2>
        <p>
          Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på
          at svare på henvendelser indenfor 24 timer, men op til ferier kan der
          være travlt, og svartiden kan derfor være op til 48 timer.
        </p>
      </div>
    </div>
  );

  
};

export default Contact;


