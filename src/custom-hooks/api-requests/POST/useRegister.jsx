import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
function useRegister() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  async function onSubmit(data) {
    try {
      setError(null)
      setLoading(true)
      await axios.post(`${baseUrl}/api/v1/register`, {
        username: data.username,
        password: data.password,
        profile: {
          firstName: data.firstname,
          lastName: data.lastname,
          phoneNumber: data.phone,
          address: data.address,
          points: 30
        }
      });
      setSuccess("Register was successful");
      setTimeout(() => {
        navigate("/login", {
          state: {
            redirectPath: "/"
          }
        })

      }, 1000)
    } catch (e) {
      if ( e.response?.data) {
        setError(e.response.data["error-message"])
      } else {
        setError("Something else went wrong");
      }
      console.error(e.request.response);
    } finally {
      setLoading(false)
    }
  }
  return {error, loading, success, onSubmit};
}
export default useRegister;