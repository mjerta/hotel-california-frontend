import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthenticationProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import hasUserRole from "../helpers/hasUserRole.jsx";

function PrivateRoute({children, redirectPath, requiredRole}) {
  const location = useLocation();
  const {roles, isAuthenticated} = useContext(AuthContext);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuthorization() {
      let authMessage = ""; // Local variable to hold the message
      let authorized = false; // Track authorization state locally
      if (!isAuthenticated) {
        setIsAuthorized(false);
        authMessage = "You must log in to access this page.";
      } else if (roles && roles.length > 0) {
        console.log("Authenticated");
        if (location.pathname === "/profile" && hasUserRole("ROLE_STAFF", roles)) {
          console.log("profile");
          setIsAuthorized(false);
          authMessage = "Staff members don't use profiles, log in as a regular user.";
        } else if (hasUserRole(requiredRole, roles)) {
          console.log("Authorized");
          authorized = true; // Mark as authorized if the required role matches
        } else {
          authMessage = "You are logged in but do not have access to this page. Please use the correct credentials.";
        }
      }
      setIsAuthorized(authorized); // Set authorization state based on checks
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
  if (isAuthorized === false) {
    return <h1>Authorising...</h1>;
  }
  return isAuthorized ? children : null;
}

export default PrivateRoute;