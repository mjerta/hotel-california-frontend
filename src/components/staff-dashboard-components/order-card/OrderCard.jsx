import "./OrderCard.css"
import OrderExtraDetails from "../order-extra-details/OrderExtraDetails.jsx";
import OrderMealsList from "../order-meals-list/OrderMealsList.jsx";
import OrdersStaffButtons from "../order-staff-buttons/OrdersStaffButtons.jsx";

function OrderCard({className, dataSet}) {
  console.log(dataSet)
  return (
    <article className={`order-card ${className ? className : ""}`}>
      <OrderExtraDetails
        locationType={dataSet.destination.locationType}
        locationNumber={dataSet.destination.locationNumber}
        orderDate={dataSet.orderDate}
      />
      <OrderMealsList
        meals={dataSet.meals}
      />
      <OrdersStaffButtons
      />
    </article>

  )
}

export default OrderCard;