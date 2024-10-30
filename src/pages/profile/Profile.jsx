import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import configBtn from "../../assets/config-btn.svg"
import SideBar from "../../components/general-components/sidebar/SideBar.jsx";
import {useContext, useState} from "react";
import SideBarToggleButton
  from "../../components/general-components/sidebar-toggle-button/SideBarToggleButton.jsx";
import ProfileDetails
  from "../../components/profile-components/profile-details/ProfileDetails.jsx";
import MainContentSection
  from "../../components/general-components/main-content-section/MainContentSection.jsx";
import UserOrderOverview
  from "../../components/profile-components/userorderoverview/UserOrderOverview.jsx";
import coinIcon from "../../assets/coin-icon.svg"
import {AuthContext} from "../../context/AuthenticationProvider.jsx";

function Profile() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {profileData} = useContext(AuthContext)
  return (
    <>
      <MainContent
      className={"main-content-profile-variant"}
      >
        <MainContentSection>
          <UserOrderOverview/>
        </MainContentSection>
        <MainContentSection
        >
          <img className={"large-coin-icon"} src={coinIcon} alt="coin-icon"/>
          <h1 className={"header-profile-coins"}>{profileData.points} earned!</h1>



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