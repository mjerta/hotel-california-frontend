import "./LoginForm.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import {useNavigate, useLocation} from "react-router-dom";

function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const { saveToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const redirectPath = location.state?.redirectPath; // Default to home if not provided
  const initialAuthMessage = location.state?.message;
  const [authMessage, setAuthMessage] = useState(initialAuthMessage);



  async function onSubmit(data) {
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:8080/api/v1/login", {
          username: data.username,
          password: data.password
        }
      )
      setAuthMessage(false)
      setSuccess("Login was successful")
      saveToken(response.data.jwt)
      console.log("Login succesful: ", response.data.jwt)

      setTimeout(() => {
        console.log(redirectPath)
        console.log("navigate back")
        const destination = redirectPath || -1;
        navigate(destination)
      }, 1000)
    } catch (e) {
      // validate this a bit better with conditionals
      console.error(e)
      setError(e.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  const {register, handleSubmit, formState: {errors}} = useForm();
  return (
    <>
      <h3>{loading && "loading"}</h3>
      <h3>{error && error}</h3>
      <h3>{authMessage && authMessage}</h3>
      <h3>{success && success}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username &&
            <p className="error-message">{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }

            })}
          />
          {errors.password &&
            <p className="error-message">{errors.password.message}</p>}
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </>
  )
}

export default LoginForm;