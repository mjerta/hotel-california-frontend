import "./OrderMealItem.css"
import QtyCircle from "../../../general-components/qty-cirle/QtyCircle.jsx";

function OrderMealItem({className, qty, name}) {
  return (
    <div className={`order-meal-item ${className ? className : ''}`}>
      <div className="box">
        <QtyCircle
          qty={qty}
          />
        <p>
          {name}
        </p>
      </div>
      <hr/>
    </div>
  )
}

export default OrderMealItem;