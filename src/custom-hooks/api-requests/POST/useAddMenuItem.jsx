import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";

function useAddMenuItem(setIsUpdated) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {token} = useContext(AuthContext);

  const baseUrl = import.meta.env.VITE_API_URL;

  async function addMenu(data) {
    try {
      setIsLoading(true);
      setError(null)
      const formData = new FormData();
      formData.append("name", data.menuName);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("image", data.image);
      data.ingredients.forEach(ingredient => {
        formData.append("ingredients", ingredient.value);
      })

      console.log(formData);
      const result = await axios.post(`${baseUrl}/api/v1/meals`, formData, {
        headers: token ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        } : {}
      })
      console.log(result.data)
      if(result.status === 201) {
        setIsUpdated(true)
      }
    } catch (e) {
      if (e.response?.status === 401) {
        setError("Unauthorized - no valid credentials");
      } else if (e.response?.status === 403) {
        setError("This endpoint is restricted");
      } else if (e.response.status === 400 && e.response.data) {
        setError(e.response.data["error-message"]);
      }

      else {
        setError("Something went wrong");
        console.error(e);
      }
    } finally {
      setIsLoading(false);
    }

  }

  return {addMenu, isLoading, error}
}

export default useAddMenuItem;