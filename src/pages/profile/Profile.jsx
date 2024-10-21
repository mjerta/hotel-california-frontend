import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";

function Profile() {
  useAuthGuard("/profile", "ROLE_USER");

  return (
    <div>
      {/*  main-middle component*/}
      {/*  side bar*/}
      {/*  profile image component*/}
      {/*  form component*/}
      {/* label and input component */}
      {/* label and input component */}
      {/* label and input component */}
      {/* label and input component */}
      {/*  cofiguration button - is meant for enabling, and for saving and disabbling the form*/}
      {/*order overview component  */}
      {/*  total point overview*/}
    </div>
  )
}

export default Profile;