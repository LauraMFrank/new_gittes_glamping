/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./form.module.css";
import { useParams, useNavigate } from "react-router-dom";
import usePost from "../../../components/hooks/usePost";

const PostReviewForm = ({ isEditMode }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [review, setReview] = useState("");
  const [stay, setStay] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();
  const { postReview, updateReview } = usePost();
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    const reviewData = new FormData();
    reviewData.append("name", name);
    reviewData.append("age", age);
    reviewData.append("review", review);
    reviewData.append("stay", stay);

    if (isEditMode) {
      reviewData.append("id", id);
    }

    if (image) {
      reviewData.append("file", image);
    }

    try {
      setIsLoading(true);
      let response;
      if (isEditMode) {
        response = await updateReview(reviewData);
        if (response) {
          setSuccess(true);
          console.log("Review opdateret:", response);
        }
      } else {
        response = await postReview(reviewData);
        if (response) {
          setSuccess(true);
          console.log("Review oprettet:", response);
        }
      }

      navigate("/backoffice");
    } catch (error) {
      setError("Noget gik galt ved håndtering af anmeldelse.");
      console.error("Fejl ved håndtering af anmeldelse:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitReview} className={styles.form}>
      <h2>{isEditMode ? "Opdater review" : "Tilføj review"}</h2>
      <div>
        <label>Navn:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Alder:</label>
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ophold:</label>
        <input
          type='text'
          value={stay}
          onChange={(e) => setStay(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Review:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Vælg billede (valgfrit):</label>
        <input type='file' onChange={handleImageChange} />
      </div>
      <button type='submit' disabled={isLoading}>
        {isEditMode ? "Opdater review" : "Tilføj review"}
      </button>
      {isLoading && <p>Indlæser...</p>}
      {error && <p style={{ color: "red" }}>Fejl: {error}</p>}
      {success && <p style={{ color: "green" }}>Review oprettet/opdateret!</p>}
    </form>
  );
};

export default PostReviewForm;
