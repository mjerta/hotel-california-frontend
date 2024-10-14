import {useState} from 'react';
import shoppingcard from "../../../assets/shopping-btn.svg"

import "./SideBar.css"

function SideBar() {
  const [opensideBar, setOpensideBar] = useState(false);

  return (
    <>
      <aside className={`sidebar ${opensideBar ? "sidebar-full-screen" : ""}`}>
        <img
          onClick={() => setOpensideBar(prev => !prev)}
          className={"shoppingcard-img"}
          src={shoppingcard} alt=""
        />
        {/*<div className={`overlay ${classname ? classname : ''}`}>*/}
        <div
          className={`sidebar-content}`}
        >
          <h1>up</h1>
          <h1>bottom</h1>
        </div>
      </aside>
    </>
  )
}

export default SideBar;