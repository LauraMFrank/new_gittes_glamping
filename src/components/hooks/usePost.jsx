import { useState } from "react";

const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // POST ACTIVITY
  const postActivity = async (activityData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(" http://localhost:3042/activity", {
        method: "POST",
        body: activityData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to post activity: ${errorText}`);
      }

      const newActivity = await response.json();
      return newActivity;
    } catch (err) {
      setError(err.message);
      console.error("Error posting activity:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // UPDATE ACTIVITY
  const updateActivity = async (activityData) => {
    for (let [key, value] of activityData.entries()) {
      console.log(`${key}: ${value}`);
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3042/activity", {
        method: "PUT",
        body: activityData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update activity: ${errorText}`);
      }

      const updatedActivity = await response.json();
      return updatedActivity;
    } catch (err) {
      setError(err.message);
      console.error("Error updating activity:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // POST SUBSCRIBER
  const postSubscriber = async (subscriberData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://glamping-v2.webmcdm.dk/subscribe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscriberData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to post subscriber: ${errorText}`);
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // POST REVIEW
  const postReview = async (reviewData) => {
    for (let pair of reviewData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://glamping-v2.webmcdm.dk/review", {
        method: "POST",
        body: reviewData,
      });

      if (!response.ok) {
        // Læs fejlen som tekst, hvis status ikke er okay
        const errorText = await response.text();
        throw new Error(`Failed to post review: ${errorText}`);
      }

      // Hvis alt er okay, parse JSON
      const data = await response.json();
      console.log("Review oprettet:", data);
      setSuccess(true);
      return data;
    } catch (err) {
      setError(err.message);
      console.error("Error posting review:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // UPDATE REVIEW
  const updateReview = async (reviewData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3042/review", {
        method: "PUT",
        body: reviewData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update review: ${errorText}`);
      }

      const updatedReview = await response.json();
      return updatedReview;
    } catch (err) {
      setError(err.message);
      console.error("Error updating review:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // POST STAY
  const postStay = async (stayData) => {
    for (let pair of stayData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3042/stay", {
        method: "POST",
        body: stayData,
      });

      if (!response.ok) {
        // Læs fejlen som tekst, hvis status ikke er okay
        const errorText = await response.text();
        throw new Error(`Failed to post stay: ${errorText}`);
      }

      // Hvis alt er okay, parse JSON
      const data = await response.json();
      console.log("Ophold oprettet:", data);
      setSuccess(true);
      return data;
    } catch (err) {
      setError(err.message);
      console.error("Error posting review:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // UPDATE STAY
  const updateStay = async (stayData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3042/stay", {
        method: "PUT",
        body: stayData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update stay: ${errorText}`);
      }

      const updatedStay = await response.json();
      console.log(updatedStay);
      return updatedStay;
    } catch (err) {
      setError(err.message);
      console.error("Error updating stay:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    postActivity,
    updateActivity,
    postSubscriber,
    postReview,
    updateReview,
    postStay,
    updateStay,
    isLoading,
    error,
    success,
  };
};

export default usePost;
