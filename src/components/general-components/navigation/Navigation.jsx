import "./Navigation.css"
import hamburger from "../../../assets/hamburger-menu.svg";
import hamburgerWhite from "../../../assets/hamburger-menu-white.svg";
import profileImg from "../../../assets/user-circle.svg";
import {OverlayContext} from "../../../context/OverlayProvider.jsx";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

function Navigation({className}) {
  const {toggleOverlay, isOverlayOpen} = useContext(OverlayContext);
  const navigate = useNavigate();

  function handleProfileClick() {
    navigate("/profile");
  }

  return (<nav className={className}>
    <div className="image-wrapper">
      <img onClick={toggleOverlay} className={"hamburger-img"} src={!isOverlayOpen ? hamburger : hamburgerWhite}
           alt=""/>
    </div>
    <div className="image-wrapper">
      <img onClick={handleProfileClick} className={"profile-img"}
           src={profileImg} alt={"profile image"}/>
    </div>
    {/*  hamburger component  - maybe imported*/}
    {/*  profile button*/}
    {/*  menu will be only visible on press of the button*/}
    {/*  it will be full width and full height and then have to close*/}
    {/*  on mobile the little side bar will be reduced to only the hamburger on the left side*/}
  </nav>)
}

export default Navigation;