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
import testOrders from "../../constant/testOrders.js";
import {
  filterOrdersByCurrentDay,
  filterOrdersByCurrentMonth,
  filterOrdersByCurrentWeek
} from "../../helpers/filterOrderByDateTime.js";

function ManagerDashboard() {
  useAuthGuard("/manager-dashboard", "ROLE_MANAGER");

  const {orders} = useFetchOrders();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [result, setResult] = useState([]);
  const [finalFilteredOrders, setFinalFilteredOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState([]);
  const [inputDateQuery, setInputDateQuery] = useState("daily")
  const [checkedItems, setCheckedItems] = useState([]);

  const filterOrdersByCheckedItems = (orders, checkedItems) => {
    console.log(testOrders)
    console.log(orders)
    if (checkedItems.length === 0) return orders;
    const extraFilter = orders.filter(order=> checkedItems.includes(order.name));
    console.log(extraFilter)
  };

  useEffect(() => {
    if (inputDateQuery === "daily") {
      setFilteredOrders(filterOrdersByCurrentDay(testOrders))
    }
    if (inputDateQuery === "weekly") {
      setFilteredOrders(filterOrdersByCurrentWeek(testOrders))
    }
    if (inputDateQuery === "monthly") {
      setFilteredOrders(filterOrdersByCurrentMonth(testOrders))
    }
  }, [inputDateQuery])

  useEffect(() => {
    if (filteredOrders && filteredOrders.length > 0) {
      const result = Object.values(
        filteredOrders.reduce((acc, obj) => {
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
      console.log(result)
      setResult(result)
      const newMenuItems = result.map(item => item.name);
      const newData = result.map(item => item.count);
      setMenuItems(newMenuItems);
      setData(newData);
    }
    else {
      setMenuItems([])
      setData([])
    }
  }, [filteredOrders])

  useEffect(() => {
    filterOrdersByCheckedItems(result, checkedItems);
    // console.log(filteredByCheckedItems)

  }, [checkedItems]);

  useEffect(() => {

  })

  return (
    <>
      <MainContent
        className={"main-content-profile-variant"}
      >
        <BarChartSection
          menuItems={menuItems}
          data={data}
        />
        <InputChartSection
          inputTimeFilter={inputDateQuery}
          setInputTimeFilter={setInputDateQuery}
          menuItems={menuItems}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </MainContent>
    </>
  )
}

export default ManagerDashboard;