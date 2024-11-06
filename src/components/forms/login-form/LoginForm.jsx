import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import {useLocation} from "react-router-dom";
import DefaultForm from "../default-form/DefaultForm.jsx";
import FormGroup from "../form-elements/form-group/FormGroup.jsx";
import FormGroupButton
  from "../form-elements/form-group-button/FormGroupButton.jsx";
import {useLogin} from "../../../custom-hooks/api-requests/POST/useLogin.jsx";

function LoginForm() {
  const {saveToken, login} = useContext(AuthContext);
  const location = useLocation()
  const redirectPath = location.state?.location;
  const initialAuthMessage = location.state?.message;
  const [authMessage, setAuthMessage] = useState(initialAuthMessage);

  const { onSubmit, loading, success, error } = useLogin({
    saveToken,
    login,
    redirectPath,
    setAuthMessage
  });
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