import {useState} from 'react';
import shoppingcard from "../../../assets/shopping-btn.svg"

import "./SideBar.css"
import "./Variants.css"

function SideBar({variant}) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <aside className={`sidebar ${variant} ${openSideBar ? "sidebar-full-screen" : ""}`}>
        <img
          onClick={() => setOpenSideBar(prev => !prev)}
          className={"shoppingcard-img"}
          src={shoppingcard} alt=""
        />
        {/*<div className={`overlay ${classname ? classname : ''}`}>*/}
        <div
          className={`sidebar-content`}
        >
          <h1>up</h1>
          <h1>bottom</h1>
        </div>
      </aside>
    </>
  )
}

export default SideBar;