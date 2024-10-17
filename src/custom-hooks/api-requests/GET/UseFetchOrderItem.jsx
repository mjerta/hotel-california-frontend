// useFetchOrderItem.js
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchOrderItem = (id) => {
  const baseUrl = import.meta.env.VITE_API_URL; // Get base URL from environment variable
  const [orderItemData, setOrderItemData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/v1/meals/${id}`);
        const data = response.data;
        setOrderItemData({
          name: data.name,
          description: data.description,
          price: data.price,
        });
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

    fetchOrderItems();
  }, []);

  return { orderItemData, loading, error }; // Return data, loading state, and error
};

export default useFetchOrderItem;