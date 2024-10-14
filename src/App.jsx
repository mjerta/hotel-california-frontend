import './App.css'
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import MenuPage from "./pages/menu/MenuPage.jsx";
import KitchenDashboard from "./pages/kitchen-dashboard/KitchenDashboard.jsx";
import ManagerDashboard from "./pages/manager-dashboard/ManagerDashboard.jsx";
import Profile from "./pages/profile/Profile.jsx";
import AddMenuItem from "./pages/add-menu-item/AddMenuItem.jsx";

function App() {

  return (

    <>
      <div className="wrapper">
        <Navigation className={"navigation"}/>
        <main className="main-container">
          <Routes>
            <Route path="/" element={<MenuPage/>}/>
            <Route path="/kitchen-dashboard" element={<KitchenDashboard/>}/>
            <Route path="/manager-dashboard" element={<ManagerDashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/new-menu-item" element={<AddMenuItem/>}/>
            <Route path="/login" element={"<Login />"}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
