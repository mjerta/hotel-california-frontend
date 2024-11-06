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
      <img onKeyDown={(e) => e.key === "Enter" && toggleOverlay()} tabIndex={"0"} onClick={toggleOverlay} className={"hamburger-img"} src={!isOverlayOpen ? hamburger : hamburgerWhite}
           alt=""/>
    </div>
    <div className="image-wrapper">
      <img onKeyDown={(e) => e.key === "Enter" && handleProfileClick()} tabIndex={"0"} onClick={handleProfileClick} className={"profile-img"}
           src={profileImg} alt={"profile image"}/>
    </div>
  </nav>)
}

export default Navigation;