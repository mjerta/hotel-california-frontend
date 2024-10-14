import {useState} from 'react';
import shoppingcard from "../../../assets/shopping-btn.svg"

import "./SideBar.css"
import "./Variants.css"

function SideBar({variant}) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <img
        onClick={() => setOpenSideBar(prev => !prev)}
        className={`shoppingcard-img ${openSideBar ? "shopping-card-img-enforce" : ""}`}
        src={shoppingcard} alt=""
      />
      <aside className={`sidebar ${variant} ${openSideBar ? "sidebar-full-screen" : ""}`}>
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