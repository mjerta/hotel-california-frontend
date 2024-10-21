import "./OrdersOverview.css"
import useFetchOrders
  from "../../../custom-hooks/api-requests/GET/useFetchOrders.jsx";
import OrderCard from "../order-card/OrderCard.jsx";
function OrdersOverview({className}) {
  const {meals, error, loading} = useFetchOrders();
  return (
    <div className={`orders-overview ${className ? className : ''}`}>

      <OrderCard/>



    </div>
  )
}

export default OrdersOverview;