import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useFetchOrdersWithInterval() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const {token, isAuthenticated} = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchOrders() {
    try {
      if (!isAuthenticated) return;
      setError(null)
      setLoading(true);
      const response = await axios.get(`${baseUrl}/api/v1/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setOrders(response.data)
    } catch (e) {
      setOrders([])
      if (e.status === 401) {
        setError("Unauthorized - no valid credentials")
      } else if (e.status === 403) {
        setError("This endpoint is restricted")
      } else {
        setError("Something went wrong. Please try again")
      }
      console.error(e.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchOrders();
    const intervalId = setInterval(fetchOrders, 10000); // Fetch orders every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [baseUrl, token, isAuthenticated]);

  return {orders, error, loading, fetchOrders}
}
export default useFetchOrdersWithInterval;