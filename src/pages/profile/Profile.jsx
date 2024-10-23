import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";
import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import configBtn from "../../assets/config-btn.svg"
import SideBar from "../../components/general-components/sidebar/SideBar.jsx";
import {useState} from "react";
import SideBarToggleButton
  from "../../components/general-components/sidebar-toggle-button/SideBarToggleButton.jsx";
import ProfileDetails
  from "../../components/profile-components/profile-details/ProfileDetails.jsx";
import MainContentSection
  from "../../components/general-components/main-content-section/MainContentSection.jsx";
import UserOrderOverview
  from "../../components/profile-components/userorderoverview/UserOrderOverview.jsx";

function Profile() {
  useAuthGuard("/profile", "ROLE_USER");
  const [openSideBar, setOpenSideBar] = useState(false);
  //

  return (
    <>
      <MainContent
      className={"main-content-profile-variant"}
      >
        <MainContentSection>
          <UserOrderOverview/>


        </MainContentSection>
        <MainContentSection>


        </MainContentSection>
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
        <ProfileDetails/>
      </SideBar>
    </>
  )
}

export default Profile;