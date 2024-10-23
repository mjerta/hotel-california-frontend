import {useContext} from 'react';

import "./Overlay.css"
import {NavLink} from "react-router-dom";
import {OverlayContext} from "../../../../context/OverlayProvider.jsx";
import {AuthContext} from "../../../../context/AuthenticationProvider.jsx";
import hasUserRole from "../../../../helpers/hasUserRole.jsx";

function Overlay({classname}) {
  const {toggleOverlay} = useContext(OverlayContext);
  const {token, removeToken, roles} = useContext(AuthContext)
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
        {token && hasUserRole("ROLE_STAFF", roles) && (
          <li>
            <NavLink
              onClick={toggleOverlay}
              className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
              to="/staff-dashboard">
              Staff Dashboard
            </NavLink>
          </li>
        )}
        {token && hasUserRole("ROLE_MANAGER", roles) && (
          <>
            <li>
              <NavLink
                onClick={toggleOverlay}
                className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                to="/manager-dashboard">
                Managers Dashboard
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
          </>
        )
        }
        {token ?
          (
            <>
              <li>
                <NavLink
                  onClick={() => {
                    removeToken();
                    toggleOverlay()
                  }}
                  to="/">
                  Logout
                </NavLink>
              </li>
              {!hasUserRole("ROLE_STAFF", roles) &&  hasUserRole("ROLE_USER", roles) && (
                <li>
                  <NavLink
                    onClick={toggleOverlay}
                    className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
                    to="/profile">
                    Profile
                  </NavLink>
                </li>
              )}
            </>
          ) :
          (
            <>
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
            </>
          )
        }
      </ul>
    </div>
  )
}

export default Overlay;