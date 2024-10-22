import "./OrderCard.css"
import OrderExtraDetails from "../order-extra-details/OrderExtraDetails.jsx";
import OrderMealsList from "../order-meals-list/OrderMealsList.jsx";
import OrdersStaffButtons from "../order-staff-buttons/OrdersStaffButtons.jsx";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import hasUserRole from "../../../helpers/hasUserRole.jsx";

function OrderCard({className, dataSet, fetchOrders}) {
  const {roles} = useContext(AuthContext);
  return (
    <>
      {hasUserRole("ROLE_CHEF", roles) && (
        (dataSet.status === "IN_QUEUE" || dataSet.status === "PREPARING_ORDER") && (
          <article className={`order-card ${className ? className : ""}`}>
            <OrderExtraDetails
              locationType={dataSet.destination.locationType}
              locationNumber={dataSet.destination.locationNumber}
              orderDate={dataSet.orderDate}
            />
            <OrderMealsList meals={dataSet.meals} />
            <OrdersStaffButtons
              id={dataSet.id}
              destination={dataSet.destination.id}
              status={dataSet.status}
              fetchOrders={fetchOrders}
            />
          </article>
        )
      )}

      {hasUserRole("ROLE_STAFF", roles) && !hasUserRole("ROLE_CHEF", roles) && (
        (dataSet.status === "ORDER_PREPARED" || dataSet.status === "ORDER_DELIVERED") && (
          <article className={`order-card ${className ? className : ""}`}>
            <OrderExtraDetails
              locationType={dataSet.destination.locationType}
              locationNumber={dataSet.destination.locationNumber}
              orderDate={dataSet.orderDate}
            />
            <OrderMealsList meals={dataSet.meals} />
            <OrdersStaffButtons
              id={dataSet.id}
              destination={dataSet.destination.id}
              status={dataSet.status}
              fetchOrders={fetchOrders}
            />
          </article>
        )
      )}
    </>
  );
}

export default OrderCard;