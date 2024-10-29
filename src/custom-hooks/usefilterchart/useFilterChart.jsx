// src/custom-hooks/useOrderDashboard.js
import {useEffect, useState} from "react";
import testOrders from "../../constant/testOrders.js";
import {
  filterOrdersByCurrentDay,
  filterOrdersByCurrentWeek,
  filterOrdersByCurrentMonth
} from "../../helpers/filterOrderByDateTime.js";

const useFilterChart = (inputDateQuery, orders) => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [result, setResult] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState([]);
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setMenuItems([]);
    setData([]);
    if (inputDateQuery === "daily") {
      setFilteredOrders(filterOrdersByCurrentDay(orders && orders.length > 0 ? orders : testOrders))
    }
    if (inputDateQuery === "weekly") {
      setFilteredOrders(filterOrdersByCurrentWeek(orders && orders.length > 0 ? orders : testOrders))
    }
    if (inputDateQuery === "monthly") {
      setFilteredOrders(filterOrdersByCurrentMonth(orders && orders.length > 0 ? orders : testOrders))
    }
  }, [inputDateQuery, orders])

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
      setResult(result)
      const newMenuItems = result.map(item => item.name);
      const newData = result.map(item => item.count);
      setMenuItems(newMenuItems);
      setData(newData);
      setCheckBoxes(newMenuItems)
    } else {
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

  };
  return {
    checkBoxes,
    menuItems,
    data,
    checkedItems,
    setCheckedItems,
    setDataBasedOnCheckBoxes,
    setMenuItems
  }
  };

export default useFilterChart;
