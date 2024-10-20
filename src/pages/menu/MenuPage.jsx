import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import SideBar from "../../components/general-components/sidebar/SideBar.jsx";
import SearchSection
  from "../../components/menu-components/seach-section/SearchSection.jsx";
import FoodMenuOverview
  from "../../components/menu-components/food-menu-overview/FoodMenuOverview.jsx";
import {useState} from "react";
import OrderOverview
  from "../../components/menu-components/order-overview/OrderOverview.jsx";
import ExtraDetails
  from "../../components/menu-components/extra-details/ExtraDetails.jsx";
import ReceiptOverview
  from "../../components/menu-components/receipt-overview/ReceiptOverview.jsx";

function MenuPage() {
  const [currentOrder, setCurrentOrder] = useState([]);

  function addMealToOrder(id) {
    setCurrentOrder([...currentOrder, id]);
  }

  return (
    <>
      <MainContent>
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
        <SearchSection/>
        <FoodMenuOverview
          addMealToOrder={addMealToOrder}
        />
      </MainContent>
      <SideBar
        className={"sidebar-small"}
        currentOrder={currentOrder}
      >
        <ExtraDetails/>
        <OrderOverview/>
        <ReceiptOverview/>

      </SideBar>
    </>
  );
}

export default MenuPage;