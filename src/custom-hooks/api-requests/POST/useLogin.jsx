import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const useLogin = ({saveToken, login, redirectPath, setAuthMessage}) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(`${baseUrl}/api/v1/login`, {
          username: data.username,
          password: data.password
        }
      )
      if (response.status === 200) {
        setAuthMessage(false) // If this was set it will be false so its not be visible for that 1 second
        setSuccess("Login was successful") // later maybe have an constant file with responses I can just call
        saveToken(response.data.jwt)
        login();
        setTimeout(() => {
          const destination = redirectPath || "/";
          navigate(destination)
        }, 1000)
      } else {
        setError("The wrong status is coming back from the server")
      }
    } catch (e) {
      if (e.status === 401) {
        setError("Unauthorized - no valid credentials")
      } else if (e.status === 403) {
        setError("This endpoint is restricted")
      } else {
        setError("Something else went wrong")
      }
      console.error(e.message)
    } finally {
      setLoading(false);
    }
  };

  return {onSubmit, loading, success, error};
};