import './App.css'
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {

  return (

    <>
      <div className="wrapper">
        <Navigation/>
        <main className="main-container">
          <Routes>
            <Route path="/" element={"<Menu />"}/>
            <Route path="/kitchen-dashboard" element={"<KitchenDashboard />"}/>
            <Route path="/manager-dashboard" element={"<ManagerDashboard />"}/>
            <Route path="/profile" element={"<Profile />"}/>
            <Route path="/new-menu-item" element={"<" +
              "AddMenuItem />"}/>
            <Route path="/login" element={"<Login />"}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
