import React, { useEffect, useState } from "react";

import styles from '../reviews/reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]); // State to store reviews
    const [loading, setLoading] = useState(true); // State to handle loading

    // Fetch reviews from an external API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(" http://localhost:3042/reviews"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        console.log(data)
        setReviews(data.data); // Assuming the API returns an array of reviews
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array ensures it runs once on component mount

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.header}>
        <h1>Vores gæster udtaler</h1>
      </div>
      {loading ? (
        <p>henter udtaleser...</p> // Display loading message while fetching
      ) : reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div className= {styles.review} key={index}>
           
            <section> 

            <div>
            <h2>{review.name}</h2>
            <h2>{review.age}</h2>
            <h2>år</h2>
            </div>
            <br />
            <h2>{review.stay}</h2>
            </section>
            <br />
            <p>{review.review}</p>
            <br />
            <p>{review.created}</p>
          
            
          </div>
        ))
      ) : (
        <p>ingen udtaleser fundet</p> // Message when no reviews are found
      )}
    </div>
  );
};

export default Reviews;
    

