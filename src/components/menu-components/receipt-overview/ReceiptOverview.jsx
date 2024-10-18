import "./ReceiptOverview.css"
import TextLineText from "./text-line-text/TextLineText.jsx";
import Button from "../../general-components/button/Button.jsx";
import coinIcon from "../../../assets/coin-icon.svg"
import {OrderContext} from "../../../context/OrderProvider.jsx";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import convertPrice from "../../../helpers/convertPrice.js";

function ReceiptOverview({className}) {
  const {
    profileData,
    points, setPoints
  } = useContext(AuthContext);
  const {
    totalPrice,
    totalPriceWithoutTax,
    calculateDiscount,
    priceWithDiscount,
    discount,
    isButtonDisabled,
    setIsButtonDisabled,
    finalPrice
  } = useContext(OrderContext);

  function handleDiscountClick() {
    calculateDiscount(profileData.points);
    if (totalPrice >= discount && totalPrice > 0) {
      console.log(totalPrice)
      setPoints(0);
    // disable the button here
    setIsButtonDisabled(true);
    }
  }

  return (<div className={`receipt-overview ${className ? className : ''}`}>
      <TextLineText
        spanTextOne={"Sub total:"}
        spanTextTwo={"With tax:"}
        priceFirstText={convertPrice(totalPriceWithoutTax.toFixed(2))}
        priceSecondText={convertPrice(totalPrice.toFixed(2))}
      />
      {profileData.id !== null && (<Button
        className={"points-btn"}
        onClick={handleDiscountClick}
        disabled={isButtonDisabled}
      >
        <div className="coin-box">
          <img src={coinIcon} alt="Coin icon"/>
          <span>{points ? points : "0"}</span>
        </div>
        <span>USE POINTS</span>
      </Button>)

      }
      <TextLineText
        spanTextOne={"Sub total with discount:"}
        spanTextTwo={"With tax and discount:"}
        priceFirstText={
          isButtonDisabled ?
            <>
              {convertPrice(priceWithDiscount.toFixed(2))}
            </>
            :
            <>
              {convertPrice(totalPriceWithoutTax.toFixed(2))}
            </>
        }
        priceSecondText={
        isButtonDisabled ?
          <>
            {convertPrice(finalPrice.toFixed(2))}

          </>
          :
          <>
            {convertPrice(totalPrice.toFixed(2))}
          </>

      }
      />

      {/*this is going to send the order: to the endpoint /api/v1/orders */}
      {/* I need mealid or drinkid and desitination id*/}
      <Button
        className={"confirm-order"}
        spanTextOne={"Sub total with discount"}
        text={"Confirm order"}
      />
    </div>

  )
}

export default ReceiptOverview;

