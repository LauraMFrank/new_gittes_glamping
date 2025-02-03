import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import usePost from "../../../components/hooks/usePost";
import { useFetch } from "../../../components/hooks/useFetch";

const PostActivityForm = ({ isEditMode }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const { isLoading, error, postActivity, updateActivity } = usePost();
  const { fetchActivityById } = useFetch();
  const navigate = useNavigate();

  // Hvis editMode er true - fetch aktivitet baseret på dens ID
  useEffect(() => {
    if (isEditMode && id) {
      const loadActivityData = async () => {
        try {
          const response = await fetchActivityById(id);
          if (response) {
            // Forudfyld formularen med aktivitetens data
            setTitle(response.title);
            setDescription(response.description);
            setDate(response.date);
            setTime(response.time);
            setImage(response.image);
          }
        } catch (error) {
          console.error("Error fetching activity:", error);
        }
      };

      loadActivityData();
    }
  }, [isEditMode, id, fetchActivityById]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmitActivity = async (event) => {
    event.preventDefault();

    const activityData = new FormData();
    activityData.append("title", title);
    activityData.append("description", description);
    activityData.append("date", date);
    activityData.append("time", time);

    // Tilføj id'et til body'en hvis det er en opdatering
    if (isEditMode) {
      activityData.append("id", id);
    }

    // Tilføj billedet hvis det er valgt
    if (image) {
      activityData.append("file", image);
    }

    try {
      let response;
      // Opdater eksisterende aktivitet hvis editMode er true
      if (isEditMode) {
        response = await updateActivity(activityData);
        if (response.ok) {
          console.log("Aktivitet opdateret:", response);
        }
      } else {
        response = await postActivity(activityData);
        if (response) {
          console.log("Aktivitet oprettet:", response);
        }
      }

      navigate(`/backoffice`);
    } catch (error) {
      console.error("Fejl ved håndtering af aktivitet:", error);
    }
  };

  return (
    <form onSubmit={handleSubmitActivity} className={styles.form}>
      <h2>{isEditMode ? "Rediger aktivitet" : "Tilføj aktivitet"}</h2>
      <div>
        <label>Titel:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Beskrivelse:</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Dage:</label>
        <input
          type='text'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tid:</label>
        <input
          type='text'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Vælg billede (valgfrit):</label>
        <input type='file' onChange={handleImageChange} />
        {image && <p>Valgt fil: {image.name}</p>}
      </div>

      <button type='submit' disabled={isLoading}>
        {isEditMode ? "Opdater aktivitet" : "Tilføj aktivitet"}
      </button>
      {isLoading && <p>Indlæser...</p>}
      {error && <p style={{ color: "red" }}>Fejl: {error}</p>}
    </form>
  );
};

export default PostActivityForm;
