import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useFetchOrders() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const {token} = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
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
        setError("Something went wrong")
        console.error(e);
      } finally {
        setLoading(false)
      }
    }
    fetchOrders();

  }, [baseUrl, token]);

  return {orders, error, loading}

}

export default useFetchOrders;