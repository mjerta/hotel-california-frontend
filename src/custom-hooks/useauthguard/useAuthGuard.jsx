import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import hasUserRole from "../../helpers/hasUserRole.jsx";
import {AuthContext} from "../../context/AuthenticationProvider.jsx";

function useAuthGuard(redirectPath, requiredRole) {
  const navigate = useNavigate();
  const {roles} = useContext(AuthContext);

  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem('jwt');
      if (token) {
        while (roles.length === 0) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        console.log(roles.length)
      }

      if (redirectPath === "/profile" && hasUserRole("ROLE_STAFF",roles)) {
        navigate("/login", {
          state: {
            redirectPath,
            message: "Staff members dont use profiles, login as regular user",
          }
        });
      }

      if (!token) {
        // Redirect if not logged in
        navigate("/login", {
          state: {
            redirectPath,
            message: "You must log in to access this page."
          }
        });
      } else if (!hasUserRole(requiredRole, roles)) {
        console.log(requiredRole, roles)
        // Redirect if the user doesn't have the required role
        navigate("/login", {
          state: {
            redirectPath,
            message: `You are logged in but do not have access to this page. Please use the correct credentials.`
          }
        });
      }
    }

    checkAuth();
  }, [roles]); // Dependency array for rerender on changes
}

export default useAuthGuard;
