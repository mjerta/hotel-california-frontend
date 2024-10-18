import "./ReceiptOverview.css"
import TextLineText from "./text-line-text/TextLineText.jsx";
import Button from "../../general-components/button/Button.jsx";
import coinIcon from "../../../assets/coin-icon.svg"
import {OrderContext} from "../../../context/OrderProvider.jsx";
import {useContext, useState} from "react";

function ReceiptOverview({className}) {

  const {
    currentOrder,
    getTotalPrice,
    getTotalPriceWithoutTax,
    getTotalPriceWithDiscount
  } = useContext(OrderContext);
  const [usePoints, setUsePoints] = useState(false);

  return (
    <div className={`receipt-overview ${className ? className : ''}`}>
      <TextLineText
        priceFirstText={getTotalPriceWithoutTax(getTotalPrice)}
        priceSecondText={getTotalPrice()}
      />
      <Button
        onClick={() => setUsePoints(true)}
        className={"points-btn"}
      >
        <div className="coin-box">
          <img src={coinIcon} alt="Coin icon"/>
          <span>{usePoints ? '0' : "130"}</span>
        </div>
        <span>USE POINTS</span>
      </Button>
      <TextLineText
        priceFirstText={
          usePoints ?
            getTotalPriceWithDiscount(130, getTotalPrice)
            :
            getTotalPriceWithoutTax(getTotalPrice)
        }
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

