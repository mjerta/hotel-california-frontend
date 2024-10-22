import "./OrderMealItem.css"

function OrderMealItem({className, qty, name}) {
  return (
    <div className={`order-meal-item ${className ? className : ''}`}>
      <div className="box">
      <div className="cirle-qty">
        <span>{qty}</span>
      </div>
        <p>
          {name}
        </p>
      </div>
      <hr/>
    </div>
  )
}

export default OrderMealItem;