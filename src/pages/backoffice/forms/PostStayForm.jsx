import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import usePost from "../../../components/hooks/usePost";
import { useFetch } from "../../../components/hooks/useFetch";

const PostStayForm = ({ isEditMode }) => {
  const [title, setTitle] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [includes, setIncludes] = useState("");
  const { id } = useParams();
  const { isLoading, error, postStay, updateStay } = usePost();
  const { fetchStayById } = useFetch();
  const navigate = useNavigate();

  // Fetch stay data if in edit mode
  useEffect(() => {
    if (isEditMode && id) {
      const loadStayData = async () => {
        try {
          const response = await fetchStayById(id);

          if (response) {
            // Forudfyld formularen med opholdens data
            setTitle(response.title);
            setDescription(response.description);
            setNumberOfPersons(response.numberOfPersons);
            setPrice(response.price);
            setImage(response.image);
            setIncludes(response.includes);
          }
        } catch (error) {
          console.error("Error fetching stay:", error);
        }
      };

      loadStayData();
    }
  }, []);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmitStay = async (event) => {
    event.preventDefault();

    // Opret et FormData-objekt for at kunne vedhæfte filen korrekt
    const stayData = new FormData();
    stayData.append("title", title);
    stayData.append("description", description);
    stayData.append("numberOfPersons", numberOfPersons);
    stayData.append("price", price);
    stayData.append("includes", includes);

    if (isEditMode) {
      stayData.append("id", id);
    }

    if (image) {
      stayData.append("file", image);
    }

    try {
      let response;
      if (isEditMode) {
        response = await updateStay(stayData);
        if (response) {
          console.log("Ophold opdateret:", response);
        }
      } else {
        response = await postStay(stayData);
        if (response) {
          console.log("Ophold oprettet:", response);
        }
      }

      // Redirect efter oprettelse eller opdatering
      navigate(`/backoffice`);
    } catch (error) {
      console.error("Fejl ved håndtering af ophold:", error);
    }
  };

  return (
    <form onSubmit={handleSubmitStay} className={styles.form}>
      <h2>{isEditMode ? "Rediger ophold" : "Tilføj ophold"}</h2>
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
        <label>Personer:</label>
        <input
          type='text'
          value={numberOfPersons}
          onChange={(e) => setNumberOfPersons(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Includerer</label>
        <input
          type='text'
          value={includes}
          onChange={(e) => setIncludes(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pris:</label>
        <input
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Vælg billede (valgfrit):</label>
        <input type='file' onChange={handleImageChange} />
      </div>
      <button type='submit' disabled={isLoading}>
        {isEditMode ? "Opdater ophold" : "Tilføj ophold"}
      </button>
      {isLoading && <p>Indlæser...</p>}
      {error && <p style={{ color: "red" }}>Fejl: {error}</p>}
    </form>
  );
};

export default PostStayForm;
