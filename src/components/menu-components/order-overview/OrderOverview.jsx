import "./OrderOverview.css"
import {useContext} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";
function OrderOverview({className}) {
  const {currentOrder} = useContext(OrderContext)
  return (
    <div className={`order-overview${className ? className : ''}`}>


    </div>
  )
}

export default OrderOverview;