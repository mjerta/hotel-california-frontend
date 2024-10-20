import {useContext, useState} from 'react';
import shoppingcard from "../../../assets/shopping-btn.svg"

import "./SideBar.css"
import "./Variants.css"
import {OrderContext} from "../../../context/OrderProvider.jsx";

function SideBar({className, children}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {currentOrder} = useContext(OrderContext);


  return (<>
    <div className={`img-container-shopping-card ${openSideBar ? "shopping-card-img-enforce" : ""}`}>
      <div className="inside-img-container">
        {currentOrder.length > 0 && (
          <span className="order-counter">
            {currentOrder.length}
          </span>
        )}
        <img
          onClick={() => setOpenSideBar(prev => !prev)}
          className={`shoppingcard-img`}
          src={shoppingcard} alt="shopping card image"
        />
      </div>
    </div>
    <aside
      className={`sidebar ${className} ${openSideBar ? "sidebar-full-screen" : ""}`}
    >
      <div
        className={`sidebar-content ${openSideBar ? "open-sidebar-content" : ''}`}
      >
        {children}
      </div>
    </aside>
  </>)
}

export default SideBar;