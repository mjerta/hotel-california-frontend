import "./OrderOverview.css"
import {useContext} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";
import OrderItem from "./order-item/OrderItem.jsx";

function OrderOverview({className}) {
  const {currentOrder} = useContext(OrderContext)



  return (

    <div className={`order-overview${className ? className : ''}`}>
      {currentOrder.length > 0 && currentOrder.map((item, index) => (
        <OrderItem
          key={index}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>

  )
}

export default OrderOverview;