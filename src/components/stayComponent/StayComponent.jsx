import React, { useEffect, useState } from "react";

import styles from '../stayComponent/stayComponent.module.css';

// StayDetail Component
const StayDetail = ({ stay, onBack }) => {
  return (
    <div className={styles.detailFullScreen}>
      <button className={styles.backButton} onClick={onBack}>
      Tilbage
      </button>
      <br />
      <br />
      <br />
      <h2 className={styles.detailheader}>Tag væk en weekend, med én du holder af</h2>
      <div className={styles.detailContent}>
        <h1>{stay.title}</h1>
        <p>{stay.description}</p>
        <p>Antal personer: {stay.numberOfPersons}</p> 
        <p>{stay.includes}</p>
        <p>Pris: {stay.price},-</p>
        <br />
        <br />
        <br />
        <div className={styles.buttondetailSection}>
                    <button onClick={() => setSelectedStay(stay)}>Book Nu</button>
                  </div>
       
      </div>
    </div>
  );
};

// StayComponent
const StayComponent = () => {
  const [stays, setStays] = useState([]);
  const [selectedStay, setSelectedStay] = useState(null); // State for selected stay
  const [loading, setLoading] = useState(true);

  // Fetch stays from API
  useEffect(() => {
    const fetchStays = async () => {
      try {
        const response = await fetch("http://localhost:3042/stays"); //API URL
        if (!response.ok) {
          throw new Error("Failed to fetch stays");
        }
        const data = await response.json();
        setStays(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stays:", error);
        setLoading(false);
      }
    };

    fetchStays();
  }, []);

  // Handle back button
  const handleBack = () => {
    setSelectedStay(null);
  };

  return (
    <div className={styles.container}>
      {selectedStay ? (
        <StayDetail stay={selectedStay} onBack={handleBack} />
      ) : (
        <>
          <h1 className={styles.header}></h1>
          {loading ? (
            <p>Indlæser ophold...</p>
          ) : stays.length > 0 ? (
            <div className={styles.cardsContainer}>
              {stays.map((stay) => (
                <div className={styles.cardContent} key={stay._id}>
                  <div className={styles.headerSection}>
                    <h2>{stay.title}</h2>
                    <p>{stay.numberOfPersons} personer</p>
                    <p>Fra {stay.price},-</p>
                  </div>
                  <div className={styles.imageSection}>
              <img
                src={stay.image}
                alt={stay.title}
              />
            </div>
                  <div className={styles.buttonSection}>
                    <button onClick={() => setSelectedStay(stay)}>Læs Mere</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Ingen ophold fundet</p>
          )}
        </>
      )}
    </div>
  );
};

export default StayComponent;