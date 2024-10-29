import "./InputChartSection.css"
import Button from "../../general-components/button/Button.jsx";
import radioBtnOpen from "../../../assets/radio-btn-open.svg"
import radioBtnClose from "../../../assets/radio-btn-closed.svg"
import {useEffect, useState} from "react";

function InputChartSection({
                             className,
                             inputTimeFilter,
                             setInputTimeFilter,
                             checkBoxes,
                             checkedItems,
                             setCheckedItems,
                             setMenuItems,
                             onChange

                           }) {

  useEffect(() => {
    const initialCheckedState = checkBoxes.map(item => item); // Create an array from menuItems
    setCheckedItems(initialCheckedState);
  }, [checkBoxes]);

  return (
    <div className={`input-chart-section ${className ? className : ''}`}>
      <div className="box timeline">
        <div className="button-radio-group">
          <Button
            onClick={() => setInputTimeFilter("daily")}
            text={"daily"}
            className={"input-chart-button"}
          />
          <img className={"custom-radio-btn"}
               src={inputTimeFilter === "daily" ? radioBtnClose : radioBtnOpen}
               alt="radio button closed"/>
        </div>
        <div className="button-radio-group">
          <Button
            onClick={() => setInputTimeFilter("weekly")}
            text={"weekly"}
            className={"input-chart-button"}
          />
          <img className={"custom-radio-btn"}
               src={inputTimeFilter === "weekly" ? radioBtnClose : radioBtnOpen}
               alt="radio button open"/>
        </div>
        <div className="button-radio-group">
          <Button
            onClick={() => setInputTimeFilter("monthly")}
            text={"monthly"}
            className={"input-chart-button"}
          />
          <img className={"custom-radio-btn"}
               src={inputTimeFilter === "monthly" ? radioBtnClose : radioBtnOpen}
               alt="radio button open"/>
        </div>
      </div>
      <div className="box selectboxes">
        {checkBoxes.map((item) => (
          <div key={item}>
            <input
              defaultChecked={true}
              onChange={onChange}
              name={item}
              type="checkbox"
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputChartSection;