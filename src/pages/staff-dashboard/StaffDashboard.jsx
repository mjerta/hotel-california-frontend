import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";
import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import OrdersOverview
  from "../../components/staff-dashboard-components/orders-overview/OrdersOverview.jsx";

function StaffDashboard() {

  useAuthGuard("/staff-dashboard", "ROLE_STAFF");

  return (
    <>
      <MainContent>
        <OrdersOverview/>
      </MainContent>
    </>
  )
}

export default StaffDashboard;