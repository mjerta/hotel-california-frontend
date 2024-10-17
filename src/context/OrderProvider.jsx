import {createContext, useState} from "react";

export const OrderContext = createContext();

function OrderProvider({children}) {
  const [currentOrder, setCurrentOrder] = useState([]);

  return (
    <OrderContext.Provider value={{
      currentOrder,
      setCurrentOrder
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
