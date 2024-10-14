import React from 'react';
import MainContent from "../../components/general-components/maincontent/MainContent.jsx";
import SideBar from "../../components/general-components/SideBar/SideBar.jsx";

function MenuPage() {
  return (
    <>
      <MainContent className="main-content">
        {/*  Middle main component*/}
        {/*  Search bar component* - will filter and set the state of the array of the menuitems available */}
        {/*  Map over menuItem component*/}
        {/* Plus button component   */}
        {/*  Sidebar component*/}
        {/*    Short detail component*/}
        {/*  Title component*/}
        {/*  Current menu component*/}
        {/*  Select menu component*/}
        {/* Remove button component - this will dissapear when the order is confirmed   */}
        {/* Order receipt component  */}
        {/* In between component   */}
        {/*  Button  component*/}
        {/*  Button component   - web confirmed  a cookie will be set of the order reference or the id depending the user is logged in or not - an interval of 10 or 20 seconds will be set*/}
      </MainContent>
      <SideBar/>
    </>
  );
}

export default MenuPage;