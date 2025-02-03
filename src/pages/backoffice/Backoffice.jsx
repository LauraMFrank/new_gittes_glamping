import { useState } from "react";
import styles from "./backoffice.module.css";
import { Link } from "react-router-dom";

import {
  BackofficeActivities,
  BackofficeReviews,
  BackofficeStays,
} from "./BackofficeItems";
import usePost from "../../components/hooks/usePost";
import useAuth from "../../components/hooks/useAuth";

const Backoffice = ({
  activities,
  setActivities,
  reviews,
  setReviews,
  stays,
  setStays,
}) => {
  const { isLoading, error } = usePost();
  const [view, setView] = useState("");
  const {signOut, user} = useAuth();


  return (
    <article className={styles.backoffice}>
      <h1>BACKOFFICE</h1>
      <Link to='/'>Tilbage til frontend</Link>
      {isLoading && <p>Indlæser...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h1>Hej {user.name}</h1>
        <button onClick={() => signOut()}>Log ud</button>
      </div>
      
      <nav>
        <button onClick={() => setView("activities")}>
          Vis Aktivitetsliste
        </button>
        <button onClick={() => setView("reviews")}>Vis Reviews</button>
        <button onClick={() => setView("stays")}>Vis Ophold</button>
      </nav>
      {view === "activities" && (
        <>
          <h2>AKTIVITETSLISTE</h2>

          <BackofficeActivities
            activities={activities}
            setActivities={setActivities}
          />
        </>
      )}
      {view === "reviews" && (
        <>
          <h2>REVIEWS</h2>

          <BackofficeReviews reviews={reviews} setReviews={setReviews} />
        </>
      )}
      {view === "stays" && (
        <>
          <h2>OPHOLD</h2>

          <BackofficeStays stays={stays} setStays={setStays} />
        </>
      )}
    </article>
  );
};

export default Backoffice;
