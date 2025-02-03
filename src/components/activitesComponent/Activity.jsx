import React, { useEffect, useState } from 'react';
import styles from '../activitesComponent/activity.module.css';

const ActivitiesCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.cardContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.cardHeader}>
        <h1>Kanotur</h1>
      </div>
      <div className={styles.cardImage}>
        <img
          src="https://example.com/image.jpg" // Replace with your image URL
          alt="Canoe on the water"
          className={styles.image}
        />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.detailsText}>
          <p>Alle dage</p>
          <p>kl. 8.00 - 20.00</p>
        </div>
        <div className={styles.detailsActions}>
          <button
            onClick={toggleAccordion}
            className={`${styles.readMoreButton} ${
              isOpen ? styles.active : ''
            }`}
          >
            {isOpen ? 'Læs Mindre' : 'Læs Mere'}{' '}
            <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
          </button>
          <div className={styles.favoriteIcon}>❤️</div>
        </div>
        {isOpen && (
          <div className={styles.detailsContent}>
            <p>
              I vores baghave finde I gudenåen, hvor vi tilbyder kanoudlejning
              for de sejglade typer. Uanset om du er nybegynder eller erfaren
              kanoentusiast, er denne tur perfekt til dig, da vi har erfarne
              guider, som står til rådighed hvis udstyret eller teknikken
              driller. På den måde har alle mulighed for at komme godt fra
              start. Kanoerne kan lejes hele dagen og uden booking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesCard;
