import React, {useContext} from 'react';

import "./Overlay.css"
import {NavLink} from "react-router-dom";
import {OverlayContext} from "../../../context/OverlayProvider.jsx";

function Overlay({classname}) {
  const {toggleOverlay} = useContext(OverlayContext);
  return (
    <div className={`overlay ${classname ? classname : ''}`}>
      <ul>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/cavities">
            Kitchen Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/appointments">
            Managers Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/whitening">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/new-menu-item">
            Add Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleOverlay}
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Overlay;