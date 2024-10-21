import "./OrderMealslist.css"
import replaceDuplicatesByQty from "../../../helpers/replaceDuplicatesByQty.js";
import OrderMealItem from "./order-meal-item/OrderMealItem.jsx";

function OrderMealsList({className, meals}) {
  const formattedArray = replaceDuplicatesByQty(meals);

  return (
    <div className={`order-meals-list ${className ? className : ''}`}>
      {formattedArray.map((meal) => (
        <OrderMealItem
          key={meal.id}
          name={meal.name}
          qty={meal.qty}
        />
      ))}
    </div>
  )
}

export default OrderMealsList;