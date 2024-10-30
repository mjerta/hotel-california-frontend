import MainContent
  from "../../components/general-components/maincontent/MainContent.jsx";
import BarChartSection
  from "../../components/manager-dashboard-components/bar-chart-section/BarChartSection.jsx";
import InputChartSection
  from "../../components/manager-dashboard-components/input-chart-section/InputChartSection.jsx";
import useFetchOrders
  from "../../custom-hooks/api-requests/GET/useFetchOrders.js";
import {useState} from "react";
import useFilterChart
  from "../../custom-hooks/usefilterchart/useFilterChart.jsx";

function ManagerDashboard() {

  const {orders} = useFetchOrders();
  const [inputDateQuery, setInputDateQuery] = useState("daily")
  const {
    setMenuItems,
    checkBoxes,
    menuItems,
    data,
    checkedItems,
    setCheckedItems,
    setDataBasedOnCheckBoxes
  } = useFilterChart(inputDateQuery, orders);

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