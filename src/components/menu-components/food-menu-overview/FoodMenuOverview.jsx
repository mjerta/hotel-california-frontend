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
  const { meals, error, loading} = useFetchMeals();
  const {addMealToOrder} = useFetchOrderItem();
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
              onClick={() => addMealToOrder(meal.id)}
            />
          ))
        )}
      </section>
    </>
  )
}
export default FoodMenuOverview;