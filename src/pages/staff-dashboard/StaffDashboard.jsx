import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import OrdersOverview
  from "../../components/staff-dashboard-components/orders-overview/OrdersOverview.jsx";

function StaffDashboard() {


  return (
    <>
      <MainContent>
        <OrdersOverview/>
      </MainContent>
    </>
  )
}

export default StaffDashboard;