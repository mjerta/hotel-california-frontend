import "./FoodMenuOverview.css"
import Card from "../card/Card.jsx";
import {useContext} from "react";
import {OrderContext} from "../../../context/OrderProvider.jsx";
import useFetchMeals
  from "../../../custom-hooks/api-requests/GET/useFetchMeals.jsx";

function FoodMenuOverview({className}) {
  const {status, searchQuery} = useContext(OrderContext);

  const { meals, error, loading} = useFetchMeals();


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
              id={meal.id}
              status={status}
            />
          ))
        )}
      </section>
    </>
  )
}

export default FoodMenuOverview;