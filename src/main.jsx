import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import OverlayProvider from "./context/OverlayProvider.jsx";
import AuthenticationProvider from "./context/AuthenticationProvider.jsx";
import OrderProvider from "./context/OrderProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* Provider to keep state of the menu that is open or not*/}
      <AuthenticationProvider>
        <OverlayProvider>
          <OrderProvider>
            <App/>
          </OrderProvider>
        </OverlayProvider>
      </AuthenticationProvider>
    </Router>
  </StrictMode>,
)
