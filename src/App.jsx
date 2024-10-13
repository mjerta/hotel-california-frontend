import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={"<Menu />"} />
        <Route path="/kitchen-dashboard" element={"<KitchenDashboard />"} />
        <Route path="/manager-dashboard" element={"<ManagerDashboard />"} />
        <Route path="/profile" element={"<Profile />"} />
        <Route path="/new-menu-item" element={"<NewMenuItem />"} />
        <Route path="/login" element={"<Login />"} />
      </Routes>
    </>
  )
}

export default App
