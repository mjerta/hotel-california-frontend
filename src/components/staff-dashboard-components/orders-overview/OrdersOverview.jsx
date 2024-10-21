import "./OrdersOverview.css"
import useFetchOrders
  from "../../../custom-hooks/api-requests/GET/useFetchOrders.jsx";
import OrderCard from "../order-card/OrderCard.jsx";

function OrdersOverview({className}) {
  const {orders, error, loading} = useFetchOrders();
  return (
    <div className={`orders-overview ${className ? className : ''}`}>
      {orders.map(order => (
        <OrderCard
          key={order.id}
          dataSet={order}
        />

      ))}
    </div>
  )
}

export default OrdersOverview;