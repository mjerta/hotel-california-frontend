import "./OrderStaffButtons.css"

function OrdersStaffButtons({className}) {
  return (
    <div className={`order-staff-buttons ${className ? className : ''}`}>
      <button>in Queue</button>
      <button>preparing order</button>
      <button>order prepared</button>
      <button>order delivered</button>
      <button>order payed</button>





      {/*NOT_PICKED_UP("Not Picked Up"),*/}
      {/*IN_QUEUE("In Queue"),*/}
      {/*PREPARING_ORDER("Preparing Order"),*/}
      {/*ORDER_PREPARED("Order Prepared"),*/}
      {/*ORDER_DELIVERED("Order Delivered"),*/}
      {/*ORDER_PAYED("Order Payed");*/}

    </div>
  )
}

export default OrdersStaffButtons;