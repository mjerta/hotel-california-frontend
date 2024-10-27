import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useAddMenuItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const {token} = useContext(AuthContext);

  const baseUrl = import.meta.env.VITE_API_URL;

  async function addMenu(data) {
    try {
      setResponseStatus(null)
      setIsLoading(true);

      const formData = new FormData();
      formData.append("name", data.menuName);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("image", data.image);
      data.ingredients.forEach(ingredient => {
        formData.append("ingredients", ingredient.value);
      })

      console.log(formData);

      // if (formData) {
      //   return;
      // }

      const result = await axios.post(`${baseUrl}/api/v1/meals/testaddmeal`, formData, {
        headers: token ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        } : {}
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

  }

  return {addMenu, isLoading, error, responseStatus}
}

export default useAddMenuItem;