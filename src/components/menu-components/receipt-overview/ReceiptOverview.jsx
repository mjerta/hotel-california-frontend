import "./ReceiptOverview.css"
import TextLineText from "./text-line-text/TextLineText.jsx";
import Button from "../../general-components/button/Button.jsx";
import coinIcon from "../../../assets/coin-icon.svg"
import {useContext, useEffect, useState} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";
import {inConstructor} from "eslint-plugin-react/lib/util/ast.js";
import axios from "axios";

function ReceiptOverview({className}) {
  // const [loading, setloading] = useState(false);
  // const [error, setError] = useState("");
  //
  // const {currentOrder} = useContext(OrderContext);
  //
  // useEffect(() => {
  //
  //   async function collectOrderData() {
  //     try {
  //       setloading(true);
  //       const result = await axios.get(`${baseUrl}/api/v1/meals/${cu}`);
  //       console.log(result)
  //     } catch (e) {
  //       console.error(e);
  //
  //     } finally {
  //       setloading(false);
  //
  //     }
  //   }
  //
  //   collectOrderData();
  //
  // }, [])

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

