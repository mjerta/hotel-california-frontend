import "./OrdersOverview.css"
import useFetchOrdersWithInterval
  from "../../../custom-hooks/api-requests/GET/useFetchOrdersWithInterval.jsx";
import OrderCard from "../order-card/OrderCard.jsx";
import hasUserRole from "../../../helpers/hasUserRole.jsx";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import {useContext} from "react";

function OrdersOverview({className}) {
  const {orders, error, loading, fetchOrders} = useFetchOrdersWithInterval();
  const {roles} = useContext(AuthContext);

  const filteredOrders = orders.filter(order => {
    if (hasUserRole("ROLE_CHEF", roles)) {
      return order.status === "IN_QUEUE" || order.status === "PREPARING_ORDER";
    } else if (hasUserRole("ROLE_STAFF", roles)) {
      return order.status === "ORDER_PREPARED" || order.status === "ORDER_DELIVERED";
    }
    return false; // If the user has no relevant role, exclude all orders
  }).filter(order => order.status !== "ORDER_PAYED"); // Also exclude ORDER_PAYED
  return (
    <>
      {loading ? (
          <h1>Loading...</h1>
        )
        : error ? (
            <h1>{error}</h1>
          )
          :
          (
            <div className={`orders-overview ${className ? className : ''}`}>
              {filteredOrders.length > 0 ? (orders.map(order => (
                  <OrderCard
                    key={order.id}
                    dataSet={order}
                    fetchOrders={fetchOrders}
                  />

                )))
                : (
                  <>
                    <h1>No orders available
                        for {hasUserRole("ROLE_CHEF", roles) ? 'chef' : 'staff'}</h1>
                  </>

                )
              }
            </div>
          )
      }
    </>
  )
}

export default OrdersOverview;