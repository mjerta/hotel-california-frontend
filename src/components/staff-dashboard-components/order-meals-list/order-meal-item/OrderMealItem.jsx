import "./OrderMealItem.css"

function OrderMealItem({className, qty, name}) {
  return (
    <div className={`order-meal-item ${className ? className : ''}`}>
      <div className="box">
      <span className="cirle-qty">
        {qty}
      </span>
        <p>
          {name}
        </p>
      </div>
      <hr/>
    </div>
  )
}

export default OrderMealItem;