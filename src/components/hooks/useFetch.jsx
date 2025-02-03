import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [stays, setStays] = useState([]);
  const [activities, setActivities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // HENT ALLE OPHOLD
  const fetchStays = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/stays");
      const data = await response.json();
      setStays(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching stays:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // HENT OPHOLD FRA ID
  const fetchStayById = async (id) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3042/stay/${id}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch stay: ${errorText}`);
      }

      const stay = await response.json();
      return stay.data[0];
    } catch (error) {
      setError(error.message);
      console.error("Error fetching stay:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // HENT ALLE REVIEWS
  const fetchReviews = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/reviews");
      const data = await response.json();
      setReviews(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // HENT ALLE AKTIVITETER
  const fetchActivities = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/activities");
      const data = await response.json();
      setActivities(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching activities:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // HENT AKTIVITET BASERET PÅ ID
  const fetchActivityById = useCallback(async (id) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3042/activity/${id}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch activity: ${errorText}`);
      }

      const activity = await response.json();
      return activity.data[0];
    } catch (error) {
      setError(error.message);
      console.error("Error fetching activity:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStays();
    fetchActivities();
    fetchReviews();
  }, []);

  return {
    stays,
    fetchStayById,
    setStays,
    activities,
    setActivities,
    fetchActivities,
    fetchActivityById,
    reviews,
    setReviews,
    isLoading,
    error,
  };
};

export { useFetch };
