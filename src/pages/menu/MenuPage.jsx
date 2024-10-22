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

function MenuPage() {
  return (
    <>
      <MainContent>
        <SearchSection/>
        <FoodMenuOverview
        />
      </MainContent>
      <SideBar
        className={"sidebar-small"}
      >
        <ExtraDetails/>
        <OrderOverview/>
        <ReceiptOverview/>

      </SideBar>
    </>
  );
}

export default MenuPage;