import "./FoodMenuOverview.css"
import Card from "../card/Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function FoodMenuOverview({className}) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/v1/meals`)
        setMeals(response.data)
      } catch (e) {
        console.error(e)
        if (e.code ===  "ERR_NETWORK") {
          setError("Could not make a connection with the API")
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, [])
  return (
    <>
      <section className={`card-overview${className ? className : ''}`}>
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Loading API ...</p>
        ) : (
          meals.length > 0 && meals.map((meal) => (
            <Card
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              image={meal.image}
              id={meal.id}
            />
          ))
        )}
      </section>
    </>
  )
}

export default FoodMenuOverview;