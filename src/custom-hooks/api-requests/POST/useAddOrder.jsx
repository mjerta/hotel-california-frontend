import {useState} from "react";
import axios from "axios";

function useAddOrder(token, currentOrder, currentLocation, setStatus) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_URL;

  async function addOrder() {
    const mealIds = currentOrder.map(menu => menu.id);
    const requestPayload = {
      meals: mealIds,
      destination: currentLocation
    };

    try {
      setIsLoading(true);
      const result = await axios.post(
        `${baseUrl}/api/v1/orders`,
        requestPayload,
        {
          headers: token ? {Authorization: `Bearer ${token}`} : {}
        }
      );
      const data = result.data;
      setStatus(data.status);
      if (token) {
        localStorage.setItem('id', data.id);
      } else {
        localStorage.setItem('orderReference', data.orderReference);
      }
      console.log(data);

    } catch (e) {
      if (e.response?.status === 401) {
        setError("Unauthorized - no valid credentials");
      } else if (e.response?.status === 403) {
        setError("This endpoint is restricted");
      } else {
        setError("Something went wrong");
        console.error(e);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {addOrder, isLoading, error};
}

export default useAddOrder;
