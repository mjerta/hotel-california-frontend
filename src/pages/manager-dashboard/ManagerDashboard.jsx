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
  const [menuItems, setMenuItems] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState([]);
  const [data, setData] = useState([]);
  const [inputDateQuery, setInputDateQuery] = useState("daily")
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setMenuItems([]);
    setData([]);
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
      setCheckBoxes(newMenuItems)
    }
    else {
      setMenuItems([])
      setData([])
    }
  }, [filteredOrders])


  // this is manually triggered
  function setDataBasedOnCheckBoxes(e) {
    const itemName = e.target.name; // Get the name of the checkbox
    const isChecked = e.target.checked; // Check if it's checked

    // Update checked items based on checkbox state
    setCheckedItems(prev => {
      const updatedCheckedItems = isChecked
        ? [...prev, itemName] // Add item if checked
        : prev.filter(item => item !== itemName); // Remove item if unchecked

      // Update menuItems and data based on the updated checked items
      const updatedMenuItems = result
      .filter(item => updatedCheckedItems.includes(item.name))
      .map(item => item.name);
      const updatedData = result
      .filter(item => updatedCheckedItems.includes(item.name))
      .map(item => item.count);

      setMenuItems(updatedMenuItems); // Set updated menu items
      setData(updatedData); // Set updated data
      return updatedCheckedItems; // Return updated checked items
    });
  }

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
          checkBoxes={checkBoxes}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          setMenuItems={setMenuItems}
          onChange={setDataBasedOnCheckBoxes}
        />
      </MainContent>
    </>
  )
}

export default ManagerDashboard;