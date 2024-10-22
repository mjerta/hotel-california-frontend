import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useFetchOrders() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const {token} = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchOrders() {
    if (!token) return;
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}/api/v1/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(response);
      setOrders(response.data)
    } catch (e) {
      if (e.status === 401) {
        setError("Unauthorized - no valid credentials") // later maybe have an constant file with responses I can just call
      } else if (e.status === 403) {
        setError("This endpoint is restricted") // later maybe have an constant file with responses I can just call
      } else {
        setError("Something went wrong")
      }
      console.error(e.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders();
    const intervalId = setInterval(fetchOrders, 10000); // Fetch orders every 10 seconds
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [baseUrl, token]);

  return {orders, error, loading, fetchOrders}

}

export default useFetchOrders;