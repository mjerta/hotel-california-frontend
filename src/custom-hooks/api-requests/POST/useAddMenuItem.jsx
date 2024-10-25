import {useContext, useState} from "react";
import axios from "axios";

function useAddMenuItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const {token} = useContext(AuthContext);

  const baseUrl = import.meta.env.VITE_API_URL;

  async function addMenu(data, image) {
    try {
      setResponseStatus(null)
      setIsLoading(true);
      const result = await axios.post(`${baseUrl}/api/v1/meals`, data, {
        headers: token ? {Authorization: `Bearer ${token}`} : {}
      })
      console.log(result.data)
      setResponseStatus(result.status)
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

    return {useAddMenuItem, isLoading, error, responseStatus}
  }
}

export default useAddMenuItem;