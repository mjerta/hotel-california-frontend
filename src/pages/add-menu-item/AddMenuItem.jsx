import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthenticationProvider.jsx";
import hasUserRole from "../../helpers/hasUserRole.jsx";
import {useNavigate} from "react-router-dom";

function AddMenuItem() {
  const {token, roles} = useContext(AuthContext)
  const navigate = useNavigate();



  // this will prevent an unauthorized user of the application to be able to use this page
  useEffect(() => {
    if (!token) {
      navigate("/login", { state: { redirectPath: "/new-menu-item" } });
    } else if (!hasUserRole("ROLE_MANAGER", roles)) {
      // If the user does not have the required role, redirect
      navigate("/login", { state: { redirectPath: "/new-menu-item" } });

    }
  }, []);

  return (
    <div>
      {/*  form component*/}
      {/*  label input component*/}
      {/*  label input component*/}
      {/* Add ingredient button  */}
      {/*  label input component*/}
      {/*  label input component*/}
      {/*  choose file component*/}
      {/*  label*/}
      {/*  button choose file*/}
      {/*  image - based on the image is being uploaded*/}
      {/*  button component save*/}
      {/*  sidebar devided by 2*/}
      {/*    list menu component map oover them*/}
    </div>
  )
}

export default AddMenuItem;