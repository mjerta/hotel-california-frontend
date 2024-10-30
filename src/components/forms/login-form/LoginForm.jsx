import "./LoginForm.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import {useNavigate, useLocation} from "react-router-dom";
import DefaultForm from "../default-form/DefaultForm.jsx";
import FormGroup from "../form-elements/form-group/FormGroup.jsx";
import FormGroupButton
  from "../form-elements/form-group-button/FormGroupButton.jsx";

function LoginForm() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const {saveToken, login} = useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const location = useLocation()
  const redirectPath = location.state?.location;
  const initialAuthMessage = location.state?.message;
  const [authMessage, setAuthMessage] = useState(initialAuthMessage);

  async function onSubmit(data) {
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
          console.log(destination);
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
      }
      else {
        setError("Something else went wrong")
      }
      console.error(e.message)
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
      <DefaultForm header={"Login"} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          type={"text"}
          className={"form-group-login-register-variant"}
          labelText={"Username: "}
          labelAndID={"username"}
          name={"username"}
          register={register("username", {
            required: "Username is required",
          })}
          errors={errors}
        />
        <FormGroup
          type={"password"}
          className={"form-group-login-register-variant"}
          labelText={"Password: "}
          labelAndID={"password"}
          name={"password"}
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
          errors={errors}
        />
        <FormGroupButton
          className={"form-group-submit-login"}
          btnClassName={"submit-button-login"}
        />
      </DefaultForm>
    </>
  )
}

export default LoginForm;