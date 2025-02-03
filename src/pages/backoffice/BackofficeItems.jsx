
import { Outlet, useNavigate } from "react-router-dom";

const BackofficeActivities = ({ activities, setActivities }) => {
  const [token] = useLocalStorage("token");
  const navigate = useNavigate();

  const handleEdit = (activityId) => {
    navigate(`/backoffice/activity/edit/${activityId}`);
  };

  const handleAdd = () => {
    navigate(`/backoffice/activity/add`);
  };

  // DELETE ACTIVITY
  const handleDeleteActivity = async (activityId) => {
    try {
      const response = await fetch(
        `http://localhost:3042/activity/${activityId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Opdater produktlisten ved at fjerne det slettede produkt
        setActivities((prevActivitys) =>
          prevActivitys.filter((activity) => activity._id !== activityId)
        );
        console.log("Aktivitet slettet");
      } else {
        console.error("Fejl ved sletning af aktivitet");
      }
    } catch (error) {
      console.error("Fejl:", error);
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Billede</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities?.map((activity) => (
            <tr key={activity._id}>
              <td>{activity.title}</td>
              <td>{activity.description}</td>
              <td>
                <img src={activity.image}></img>
              </td>
              <td>
                <button onClick={() => handleEdit(activity._id)}>
                  Redigér
                </button>
                <button onClick={() => handleDeleteActivity(activity._id)}>
                  Slet
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={() => handleAdd()}>Tilføj aktivitet</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

const BackofficeReviews = ({ reviews, setReviews }) => {
  const [token] = useLocalStorage("token");
  const navigate = useNavigate();

  const handleEdit = (reviewId) => {
    navigate(`/backoffice/review/edit/${reviewId}`);
  };

  const handleAdd = () => {
    navigate(`/backoffice/reviews/add`);
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(`http://localhost:3042/review/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Opdater produktlisten ved at fjerne det slettede produkt
        setReviews((prevReviews) =>
          prevReviews.filter((review) => review._id !== reviewId)
        );
        console.log("Review slettet");
      } else {
        console.error("Fejl ved sletning af review");
      }
    } catch (error) {
      console.error("Fejl:", error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Alder</th>
            <th>Ophold</th>
            <th>Review</th>
            <th>Billede</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((review) => (
            <tr key={review._id}>
              <td>{review.name}</td>
              <td>{review.age}</td>
              <td>{review.stay}</td>
              <td>{review.review}</td>
              <td>
                <img src={review.image}></img>
              </td>
              <td>
                <button onClick={() => handleEdit(review._id)}>Redigér</button>
                <button onClick={() => handleDeleteReview(review._id)}>
                  Slet
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={() => handleAdd()}>Tilføj review</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

const BackofficeStays = ({ stays, setStays }) => {
  const [token] = useLocalStorage("token");
  const navigate = useNavigate();

  const handleEdit = (stayId) => {
    navigate(`/backoffice/stay/edit/${stayId}`);
  };

  const handleAdd = () => {
    navigate(`/backoffice/stay/add`);
  };

  const handleDeleteStay = async (stayId) => {
    try {
      const response = await fetch(`http://localhost:3042/stay/${stayId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Opdater produktlisten ved at fjerne det slettede produkt
        setStays((prevStays) =>
          prevStays.filter((stay) => stay._id !== stayId)
        );
        console.log("Ophold slettet");
      } else {
        console.error("Fejl ved sletning af ophold");
      }
    } catch (error) {
      console.error("Fejl:", error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Number of persons</th>
            <th>Billede</th>
            <th>Pris</th>
            <th>Includes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stays?.map((stay) => (
            <tr key={stay._id}>
              <td>{stay.title}</td>
              <td>{stay.description}</td>
              <td>{stay.numberOfPersons}</td>
              <td>
                <img src={stay.image}></img>
              </td>
              <td>{stay.price}</td>
              <td>{stay.includes}</td>

              <td>
                <button onClick={() => handleEdit(stay._id)}>Redigér</button>
                <button onClick={() => handleDeleteStay(stay._id)}>Slet</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={() => handleAdd()}>Tilføj ophold</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

export { BackofficeActivities, BackofficeReviews, BackofficeStays };
