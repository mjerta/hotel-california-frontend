import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import SideBar from "../../components/general-components/sidebar/SideBar.jsx";
import SearchSection
  from "../../components/menu-components/seach-section/SearchSection.jsx";
import FoodMenuOverview
  from "../../components/menu-components/food-menu-overview/FoodMenuOverview.jsx";
import OrderOverview
  from "../../components/menu-components/order-overview/OrderOverview.jsx";
import ExtraDetails
  from "../../components/menu-components/extra-details/ExtraDetails.jsx";
import ReceiptOverview
  from "../../components/menu-components/receipt-overview/ReceiptOverview.jsx";
import {useContext, useState} from "react";
import shoppingBtn from "../../assets/shopping-btn.svg"
import SideBarToggleButton
  from "../../components/general-components/sidebar-toggle-button/SideBarToggleButton.jsx";
import {OrderContext} from "../../context/OrderProvider.jsx";


function MenuPage() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {currentOrder} = useContext(OrderContext);

  return (
    <>
      <MainContent>
        <SearchSection/>
        <FoodMenuOverview
        />
      </MainContent>
      <SideBarToggleButton
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
        currentOrder={currentOrder}
        image={shoppingBtn}
        alt={"shopping card image"}
        className={"menu-page-variant"}
        />
      <SideBar
        className={"sidebar-small"}
        openSideBar={openSideBar}
      >
        <ExtraDetails/>
        <OrderOverview/>
        <ReceiptOverview/>

      </SideBar>
    </>
  );
}

export default MenuPage;