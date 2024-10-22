import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useUpdateOrder() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const {token} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const updateOrderStatus = async (id, status, destination) => {
    setLoading(true);

    const data = {
      status: status,
      ...(destination && {destination: destination}) // Add destination only if it's not null or undefined
    };

    try {
      const response = await axios.patch(
        `${baseUrl}/api/v1/orders/updateorderbystaff/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(response.data);
    } catch (e) {
      if (e.response?.status === 401) {
        setError("Unauthorized - no valid credentials");
      } else if (e.response?.status === 403) {
        setError("This endpoint is restricted");
      } else {
        setError("Something went wrong");
      }
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return {loading, error, result, updateOrderStatus};
}

export default useUpdateOrder;
