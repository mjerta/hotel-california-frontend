import {createContext, useEffect, useState} from "react";

export const OrderContext = createContext();

function OrderProvider({children}) {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithoutTax, setTotalPriceWithoutTax] = useState(0);
  // const [totalPriceWithDiscount, setTotalPriceWithDiscount] = useState(0);

  useEffect(() => {
    const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);

    const priceWithoutTax = total / 1.21; // Assuming a 21% tax rate
    setTotalPriceWithoutTax(priceWithoutTax);

    console.log("Total price:", total);
    console.log("Total price without tax:", priceWithoutTax);


  }, [currentOrder]);


  return (
    <OrderContext.Provider value={{
      currentOrder,
      setCurrentOrder,
      totalPrice,
      totalPriceWithoutTax,

    }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
