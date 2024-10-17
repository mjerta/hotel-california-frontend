import {useContext, useState} from 'react';
import shoppingcard from "../../../assets/shopping-btn.svg"

import "./SideBar.css"
import "./Variants.css"
import {OrderContext} from "../../../context/OrderProvider.jsx";

function SideBar({className, children}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {currentOrder} = useContext(OrderContext)

  return (
    <>
      <img
        onClick={() => setOpenSideBar(prev => !prev)}
        className={`shoppingcard-img ${openSideBar ? "shopping-card-img-enforce" : ""}`}
        src={shoppingcard} alt=""
      />
      <aside
        className={`sidebar ${className} ${openSideBar ? "sidebar-full-screen" : ""}`}>
        <div
          className={`sidebar-content`}
        >
          <p>result: {currentOrder.length > 0 && currentOrder.map((menuitem) => (
            menuitem
          ))}</p>
          {children}
        </div>
      </aside>
    </>
  )
}

export default SideBar;