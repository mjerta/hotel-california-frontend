import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import OverlayProvider from "./context/OverlayProvider.jsx";
import AuthenticationProvider from "./context/AuthenticationProvider.jsx";
import OrderProvider from "./context/OrderProvider.jsx";
import LocationProvider from "./context/LocationProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthenticationProvider>
        <LocationProvider>
          <OverlayProvider>
            <OrderProvider>
              <App/>
            </OrderProvider>
          </OverlayProvider>
        </LocationProvider>
      </AuthenticationProvider>
    </Router>
  </StrictMode>,
)