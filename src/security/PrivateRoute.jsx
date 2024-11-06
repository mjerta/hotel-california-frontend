import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthenticationProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import hasUserRole from "../helpers/hasUserRole.jsx";

function PrivateRoute({children, redirectPath, requiredRole}) {
  const location = useLocation();
  const {roles, isAuthenticated} = useContext(AuthContext);
  const [Authorizing, setAuthorizing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuthorization() {
      let authMessage = "";
      let authorized = false;
      if (!isAuthenticated) {
        setAuthorizing(false);
        authMessage = "You must log in to access this page.";
      } else if (roles && roles.length > 0) {
        if (location.pathname === "/profile" && hasUserRole("ROLE_STAFF", roles)) {
          setAuthorizing(false);
          authMessage = "Staff members don't use profiles, log in as a regular user.";
        } else if (hasUserRole(requiredRole, roles)) {
          authorized = true; // Mark as authorized if the required role matches
        } else {
          authMessage = "You are logged in but do not have access to this page. Please use the correct credentials.";
        }
      }
      setAuthorizing(authorized); // Set authorization state based on checks
      // Check if not authorized and redirect if necessary
      if (!authorized) {
        navigate(redirectPath, {
          state: {
            location: location.pathname,
            message: authMessage,
          }
        });
      }
    }
    void checkAuthorization();
  }, [roles, isAuthenticated, requiredRole]);
  if (Authorizing === false) {
    return <h1>Authorising...</h1>;
  }
  return Authorizing ? children : null;
}

export default PrivateRoute;