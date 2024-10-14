import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import OverlayProvider from "./context/OverlayProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* Provider to keep state of the menu that is open or not*/}
      <OverlayProvider>
        <App/>
      </OverlayProvider>
    </Router>
  </StrictMode>,
)
