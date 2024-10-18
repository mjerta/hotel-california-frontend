import "./ReceiptOverview.css"
import TextLineText from "./text-line-text/TextLineText.jsx";
import Button from "../../general-components/button/Button.jsx";
import coinIcon from "../../../assets/coin-icon.svg"
import {OrderContext} from "../../../context/OrderProvider.jsx";
import {useContext, useState} from "react";

function ReceiptOverview({className}) {

  const {
    currentOrder,
    totalPrice,
    totalPriceWithoutTax
  } = useContext(OrderContext);

  const points = 120;

  return (
    <div className={`receipt-overview ${className ? className : ''}`}>
      <TextLineText
        priceFirstText={totalPriceWithoutTax}
        priceSecondText={totalPrice}
      />
      <Button
        className={"points-btn"}
      >
        <div className="coin-box">
          <img src={coinIcon} alt="Coin icon"/>
          <span>{points ?  points : "130"}</span>
        </div>
        <span>USE POINTS</span>
      </Button>
      <TextLineText
        // priceFirstText={
        //   points ?
        //     getTotalPriceWithoutTax(getTotalPrice) - discount
        //     :
        //     getTotalPriceWithoutTax(getTotalPrice)
        // }
        priceSecondText={"41,14"}
      />
      <Button
        className={"confirm-order"}
        text={"Confirm order"}
      />
    </div>

  )
}

export default ReceiptOverview;

