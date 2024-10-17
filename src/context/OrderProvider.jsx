import {createContext, useState} from "react";

export const OrderContext = createContext();

function OrderProvider({children}) {
  const [currentOrder, setCurrentOrder] = useState([]);

  function addMealToOrder(id) {
    setCurrentOrder([...currentOrder, id]);
  }

  return (
    <OrderContext.Provider value={{
      currentOrder: currentOrder,
      addMealToOrder,
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider;