import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";

function AddMenuItem() {
  useAuthGuard("/new-menu-item", "ROLE_MANAGER");
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