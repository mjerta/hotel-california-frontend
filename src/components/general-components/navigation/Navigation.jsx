import "./Navigation.css"
import hamburger from "../../../assets/hamburger-menu.svg";
import profileImg from "../../../assets/user-circle.svg";
import {OverlayContext} from "../../../context/OverlayProvider.jsx";
import {useContext} from "react";

function Navigation({className}) {
  const {toggleOverlay} = useContext(OverlayContext);
  return (
    <nav className={className}>
      <img onClick={toggleOverlay} className={"hamburger-img"} src={hamburger}
           alt=""/>
      <img className={"profile-img"} src={profileImg}/>
      <div className="navigation-content">
      </div>
        {/*  hamburger component  - maybe imported*/}
        {/*  profile button*/}
        {/*  menu will be only visible on press of the button*/}
        {/*  it will be full width and full height and then have to close*/}
        {/*  on mobile the little side bar will be reduced to only the hamburger on the left side*/}
    </nav>
  )
}

export default Navigation;