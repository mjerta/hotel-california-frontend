// useFetchMeals.js
import {useState, useEffect} from "react";
import axios from "axios";

function useFetchMeals() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/v1/meals`);
        setMeals(response.data);
      } catch (e) {
        console.error(e);
        if (e.code === "ERR_NETWORK") {
          setError("Could not make a connection with the API");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, [baseUrl]);
  return {meals, error, loading};
}

export default useFetchMeals;
