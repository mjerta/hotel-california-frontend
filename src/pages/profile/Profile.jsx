import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";
import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import configBtn from "../../assets/config-btn.svg"
import SideBar from "../../components/general-components/sidebar/SideBar.jsx";
import {useState} from "react";
import SideBarToggleButton
  from "../../components/general-components/sidebar-toggle-button/SideBarToggleButton.jsx";

function Profile() {
  useAuthGuard("/profile", "ROLE_USER");
  const [openSideBar, setOpenSideBar] = useState(false);
  //

  return (
    <>
      <MainContent>
      </MainContent>
      <SideBarToggleButton
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
        image={configBtn}
        alt={"config image"}
        className={"profile-variant"}
      />
      <SideBar
        className={"sidebar-small"}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      >
      </SideBar>
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
    </>
  )
}

export default Profile;