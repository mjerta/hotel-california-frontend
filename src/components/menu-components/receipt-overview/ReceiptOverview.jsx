import "./ReceiptOverview.css"
import TextLineText from "./text-line-text/TextLineText.jsx";
import Button from "../../general-components/button/Button.jsx";
import coinIcon from "../../../assets/coin-icon.svg"

function ReceiptOverview({className}) {
  return (
    <div className={`receipt-overview ${className ? className : ''}`}>
      <TextLineText
        priceSecondText={"41,14"}
      />
      <Button
        className={"points-btn"}
      >
        <div className="coin-box">
          <img src={coinIcon} alt="Coin icon"/>
          <span>150</span>
        </div>
        <span>USE POINTS</span>
      </Button>
      <TextLineText
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

