import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationProvider.jsx"; // Adjust the path based on your project structure
import hasUserRole from "../../helpers/hasUserRole.jsx";

function useAuthGuard(redirectPath, requiredRole) {
  const { roles } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (!token) {
      // Redirect if not logged in
      navigate("/login", {
        state: {
          redirectPath,
          message: "You must log in to access this page."
        }
      });
    } else if (!hasUserRole(requiredRole, roles)) {
      // Redirect if the user doesn't have the required role
      navigate("/login", {
        state: {
          redirectPath,
          message: `You are logged in but do not have access to this page. Please use the correct credentials.`
        }
      });
    }
  }, [navigate, roles, redirectPath, requiredRole]); // Dependency array for rerender on changes
}

export default useAuthGuard;
