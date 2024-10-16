import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";

function ManagerDashboard() {
  useAuthGuard("/manager-dashboard", "ROLE_MANAGER");

  return (
    <div>
      {/*  Middle main component*/}
        {/* graph component - this will be probably a package imported*/}
        {/* Configuration component */}
          {/* time selector component */}
          {/*  MenuPage item selector - based on the state with an result of an array of a request.*/}
          {/* Set Range component  */}

    </div>
  )
}

export default ManagerDashboard;