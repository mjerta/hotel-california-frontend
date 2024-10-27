import "./FoodMenuOverview.css"
import Card from "../card/Card.jsx";
import {useContext} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";
import useFetchMeals
  from "../../../custom-hooks/api-requests/GET/useFetchMeals.jsx";
import useFetchOrderItem
  from "../../../custom-hooks/api-requests/GET/UseFetchOrderItem.jsx";

function FoodMenuOverview({className}) {
  const {status, searchQuery} = useContext(OrderContext);
  // gets all meals
  const { meals, error, loading} = useFetchMeals();
  // get the function to put a indiviual meal to the current order
  console.log(meals)

  const {addMealToOrder} = useFetchOrderItem();
  // Filter meals based on searchQuery
  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className={`card-overview${className ? className : ''}`}>
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Loading API ...</p>
        ) : (
          filteredMeals.length > 0 && filteredMeals.map((meal) => (
            <Card
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              image={meal.image}
              status={status}
              // id={meal.id}
              onClick={() => addMealToOrder(meal.id)}
            />
          ))
        )}
      </section>
    </>
  )
}

export default FoodMenuOverview;