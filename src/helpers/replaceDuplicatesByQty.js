function replaceDuplicatesByqty(meals) {
const combinedMeals = meals.reduce((acc, meal) => {
  // Find if the meal with the same ID already exists in the accumulator
  const existingMeal = acc.find(m => m.id === meal.id);

  if (existingMeal) {
    // If it exists, increase the qty by 1
    existingMeal.qty += 1;
  } else {
    // If it doesn't exist, add the meal to the array with qty: 1
    acc.push({ ...meal, qty: 1 });
  }
  return acc;
}, []);

return combinedMeals;
}

export default replaceDuplicatesByqty;