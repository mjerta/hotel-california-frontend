// useFetchOrderItem.js
import { useState} from "react";
import axios from "axios";
import {useContext} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";

function useFetchOrderItem() {
  const {setCurrentOrder} = useContext(OrderContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  async function addMealToOrder(id) {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${baseUrl}/api/v1/meals/${id}`);
      const meal = response.data;
      setCurrentOrder((prevOrder) => [...prevOrder, meal]);
    } catch (e) {
      if (e.response?.status === 401) {
        setError("Unauthorized - no valid credentials");
      } else if (e.response?.status === 403) {
        setError("This endpoint is restricted");
      } else {
        setError("Something went wrong");
      }
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    addMealToOrder,
    loading,
    error
  };
}

export default useFetchOrderItem;