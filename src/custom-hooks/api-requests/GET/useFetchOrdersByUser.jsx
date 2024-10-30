import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useFetchOrdersByUser() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const {token, isAuthenticated} = useContext(AuthContext);
  const [ordersByUser, setOrdersByUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchOrdersByUser() {
      try {
        setLoading(true);
        if (!isAuthenticated) return;
        const response = await axios.get(`${baseUrl}/api/v1/orders/loggeduser`, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        setOrdersByUser(response.data);
      } catch (e) {
        if (e.status === 401) {
          setError("Unauthorized - no valid credentials") // later maybe have an constant file with responses I can just call
        } else if (e.status === 403) {
          setError("This endpoint is restricted") // later maybe have an constant file with responses I can just call
        } else {
          setError("Something went wrong on the server")
        }
        console.error(e.message)
      } finally {
        setLoading(false);
      }
    }

    void fetchOrdersByUser()

  }, [token, isAuthenticated]);

  return {ordersByUser, error, loading}

}

export default useFetchOrdersByUser;