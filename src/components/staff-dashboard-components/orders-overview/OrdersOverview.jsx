import "./OrdersOverview.css"
import useFetchOrders
  from "../../../custom-hooks/api-requests/GET/useFetchOrders.jsx";
function OrdersOverview({className}) {
  const {meals, error, loading} = useFetchOrders();
  return (
    <div className={`orders-overview ${className ? className : ''}`}>



    </div>
  )
}

export default OrdersOverview;