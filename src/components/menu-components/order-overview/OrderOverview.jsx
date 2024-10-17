import "./OrderOverview.css"
import {useContext, useEffect} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";
import OrderItem from "../receipt-overview/order-item/OrderItem.jsx";

function OrderOverview({className}) {
  const {currentOrder} = useContext(OrderContext)

  return (

    <div className={`order-overview${className ? className : ''}`}>
      {currentOrder.map((item, index) => (
        <OrderItem
          key={index}
          id={item}
        />
      ))}
    </div>

  )
}

export default OrderOverview;