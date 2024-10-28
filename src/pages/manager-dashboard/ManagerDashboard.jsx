import useAuthGuard from "../../custom-hooks/useauthguard/useAuthGuard.jsx";
import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import BarChartSection
  from "../../components/manager-dashboard-components/bar-chart-section/BarChartSection.jsx";
import InputChartSection
  from "../../components/manager-dashboard-components/input-chart-section/InputChartSection.jsx";
import useFetchOrders
  from "../../custom-hooks/api-requests/GET/useFetchOrders.js";
import {useEffect, useState} from "react";

function ManagerDashboard() {
  useAuthGuard("/manager-dashboard", "ROLE_MANAGER");
  const {orders} = useFetchOrders();

  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      console.log(orders)

      const result = Object.values(
        orders.reduce((acc, obj) => {
          console.log(obj)
          obj.meals.forEach(({name}) => {
            // If the name is already in the accumulator, increase the count; otherwise, initialize it
            if (acc[name]) {
              acc[name].count += 1;
            } else {
              acc[name] = {name: name, count: 1};
            }
          });
          return acc;
        }, {})
      );

      const newMenuItems = result.map(item => item.name);
      console.log(newMenuItems)
      const newData = result.map(item => item.count);
      console.log(newData)

      setMenuItems(newMenuItems);
      setData(newData);
    }
  }, [orders])

  return (
    <>
      <MainContent
        className={"main-content-profile-variant"}
      >
        <BarChartSection
          menuItems={menuItems}
          data={data}
          // menuItems={['Ceasar-Salad', 'Pad-Thai']}
          // data={[5, 2,]}
          // menuItems={['bar A', 'bar B']}
          // data={[2, 5]}
        />
        <InputChartSection/>
      </MainContent>
    </>
  )
}

export default ManagerDashboard;