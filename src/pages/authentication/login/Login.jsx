import "./Login.css"
import MainContent
  from "../../../components/general-components/maincontent/MainContent.jsx";
import LoginForm from "../../../components/forms/LoginForm/LoginForm.jsx";

function Login() {
  return (
    <>
      <MainContent className={"main-content"}>
        <h1>Login</h1>
        <LoginForm/>
      </MainContent>
    </>

  )
}

export default Login;