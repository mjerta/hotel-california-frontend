import "./RegisterForm.css"
import DefaultForm from "../default-form/DefaultForm.jsx";
import FormGroup from "../form-elements/form-group/FormGroup.jsx";
import {useForm} from "react-hook-form";
import SubmitButton from "../form-elements/submit-button/SubmitButton.jsx";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import FormGroupButton
  from "../form-elements/form-group-button/FormGroupButton.jsx";

function RegisterForm() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function onSubmit(data) {
    try {
      setLoading(true)
      const response = await axios.post(`${baseUrl}/api/v1/register`, {
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
      if (e.response.data) {
        setError(e.response.data["error-message"])
      } else {
        setError("Bad request");
      }
      console.error(e.request.response);
    } finally {
      setLoading(false)
    }
  }

  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <>
      <h3>{loading && "loading..."}</h3>
      <h3>{error && error}</h3>
      <h3>{success && success}</h3>
      <DefaultForm header={"Register"} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          type={"text"}
          className={"form-group-login-register-variant"}
          labelText={"Username: "}
          labelAndID={"username"}
          name={"username"}
          register={register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters"
            },
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 characters"
            }
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
            },
          })}
          errors={errors}
        />
        <FormGroup
          type={"text"}
          className={"form-group-login-register-variant"}
          labelText={"First name: "}
          labelAndID={"firstname"}
          name={"firstname"}
          register={register("firstname", {
            required: "firstname is required",
            minLength: {
              value: 2,
              message: "First name must be at least 8 characters"
            },
            maxLength: {
              value: 50,
              message: "First name cannot exceed 50 characters"
            }
          })}
          errors={errors}
        />
        <FormGroup
          type={"text"}
          className={"form-group-login-register-variant"}
          labelText={"Last name: "}
          labelAndID={"lastname"}
          name={"lastname"}
          register={register("lastname", {
            required: "lastname is required",
            minLength: {
              value: 2,
              message: "Last name must be at least 8 characters"
            },
            maxLength: {
              value: 50,
              message: "Last name cannot exceed 50 characters"
            }
          })}
          errors={errors}
        />
        <FormGroup
          type={"text"}
          className={"form-group-login-register-variant"}
          labelText={"Phone number: "}
          labelAndID={"phone"}
          name={"phone"}
          register={register("phone", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 characters"
            },
            maxLength: {
              value: 15,
              message: "Phone number cannot exceed 15 characters"
            },
            pattern: {
              value: /^\+?[0-9]*$/,
              message: "Phone number must contain only numbers and can start with +"
            }
          })}
          errors={errors}
        />
        <FormGroup
          type={"text"}
          className={"form-group-login-register-variant"}
          labelText={"Address: "}
          labelAndID={"address"}
          name={"address"}
          register={register("address", {
            required: "Address is required",
            maxLength: {
              value: 100,
              message: "Address number cannot exceed 15 characters"
            },
          })}
          errors={errors}
        />
        <FormGroupButton/>
      </DefaultForm>
    </>
  )
}

export default RegisterForm;