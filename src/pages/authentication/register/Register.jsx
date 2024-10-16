import "./Register.css"
import MainContent
  from "../../../components/general-components/maincontent/MainContent.jsx";
import RegisterForm
  from "../../../components/forms/register-form/RegisterForm.jsx";
function Register() {
  return (
    <>
    <MainContent className={"main-content"}>
      <h1>Register</h1>
      <RegisterForm/>

    </MainContent>
    </>
  )
}

export default Register;