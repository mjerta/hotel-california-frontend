import {createContext, useState} from "react";

export const OrderContext = createContext();

function OrderProvider({children}) {
  const [currentOrder, setCurrentOrder] = useState([]);

  function getTotalPrice() {
    let total = 0;
    currentOrder.forEach((item) => {
      total += item.price;
    })
    return total.toFixed(2);
  }

  function getTotalPriceWithoutTax(callBack) {
    return (callBack() * .79).toFixed(2);
  }

  function getTotalPriceWithDiscount(points, callBack) {
    const discount = points / 25; // Calculate the discount
    console.log(discount)
    const totalPrice = callBack(); // Get the total price using the callback
    console.log(totalPrice)

    const newPrice = totalPrice - discount; // Subtract the discount from total

    if (newPrice <= 0) {
      return 0; // Ensure the price doesn't go below 0
    }

    return newPrice.toFixed(2); // Return the new price with two decimal places
  }

  return (
    <OrderContext.Provider value={{
      currentOrder,
      setCurrentOrder,
      getTotalPrice,
      getTotalPriceWithoutTax,
      getTotalPriceWithDiscount
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
