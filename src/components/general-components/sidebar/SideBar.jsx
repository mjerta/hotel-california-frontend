import {useState} from 'react';
import shoppingcard from "../../../assets/shopping-btn.svg"

import "./SideBar.css"
import "./Variants.css"

function SideBar({className, children}) {
  const [openSideBar, setOpenSideBar] = useState(false);

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
          {children}
        </div>
      </aside>
    </>
  )
}

export default SideBar;