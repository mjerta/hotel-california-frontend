import './App.css'
import {Route, Routes} from "react-router-dom";
import Navigation
  from "./components/general-components/navigation/Navigation.jsx";
import MenuPage from "./pages/menu/MenuPage.jsx";
import StaffDashboard from "./pages/staff-dashboard/StaffDashboard.jsx";
import ManagerDashboard from "./pages/manager-dashboard/ManagerDashboard.jsx";
import Profile from "./pages/profile/Profile.jsx";
import AddMenuItem from "./pages/add-menu-item/AddMenuItem.jsx";
import {useContext} from "react";
import Overlay
  from "./components/general-components/navigation/Overlay/Overlay.jsx";
import {OverlayContext} from "./context/OverlayProvider.jsx";
import Login from "./pages/authentication/login/Login.jsx";
import Register from "./pages/authentication/register/Register.jsx";
import PrivateRoute from "./security/PrivateRoute.jsx";

function App() {
  const {isOverlayOpen} = useContext(OverlayContext);
  return (

    <>
      <div className="wrapper">
        <Navigation
          className={"navigation"}
        />
        {isOverlayOpen && (<Overlay/>)}
        <main className="main-container">
          <Routes>
            <Route path="/" element={<MenuPage/>}/>
            <Route path="/staff-dashboard" element={
              <PrivateRoute requiredRole={"ROLE_STAFF"} redirectPath={"/login"}>
                <StaffDashboard/>
              </PrivateRoute>
            }/>
            <Route path="/manager-dashboard" element={
              <PrivateRoute requiredRole={"ROLE_MANAGER"}
                            redirectPath={"/login"}>
                <ManagerDashboard/>
              </PrivateRoute>
            }/>
            <Route path="/profile" element={
              <PrivateRoute requiredRole={"ROLE_USER"} redirectPath={"/login"}>
                <Profile/>
              </PrivateRoute>
            }/>
            <Route path="/new-menu-item" element={
              <PrivateRoute requiredRole={"ROLE_MANAGER"} redirectPath={"/login"}>
                <AddMenuItem/>
              </PrivateRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/*" element={<h1>Page not found</h1>}/>

          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
