import {createContext, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthenticationProvider.jsx";
import useLoadOrder from "../custom-hooks/api-requests/GET/useLoadOrder.jsx";

export const OrderContext = createContext();

function OrderProvider({children}) {
  const {token} = useContext(AuthContext);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithoutTax, setTotalPriceWithoutTax] = useState(0);
  const [priceWithDiscount, setPriceWithDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isTableValid, setIsTableValid] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [status, setStatus] = useState(null)

  useLoadOrder(setCurrentOrder, setStatus, setCurrentLocation, token, status);
    useEffect(() => {
      console.log(currentOrder)
      const total = currentOrder.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
      const priceWithoutTax = total / 1.21; // Assuming a 21% tax rate
      setTotalPriceWithoutTax(priceWithoutTax);

    }, [currentOrder]);

    // this need to be in a different useEffect. Cause states need to be updated first.
    useEffect(() => {
      if (discount > 0) {
        const newPriceWithoutTax = (totalPriceWithoutTax - discount)
        setPriceWithDiscount(newPriceWithoutTax);
        setFinalPrice(newPriceWithoutTax * 1.21)
      }
    }, [totalPriceWithoutTax]);

    function calculateDiscount(points) {
      if (totalPriceWithoutTax <= 0) {
        setPriceWithDiscount(0);
      } else {
        console.log("test")
        const discount = points / 25;
        const newPriceWithoutTax = (totalPriceWithoutTax - discount)
        setDiscount(discount);
        setPriceWithDiscount(newPriceWithoutTax);
        setFinalPrice(newPriceWithoutTax * 1.21)
      }
    }

    return (
      <OrderContext.Provider value={{
        currentOrder,
        setCurrentOrder,
        totalPrice,
        totalPriceWithoutTax,
        calculateDiscount,
        discount,
        priceWithDiscount,
        isButtonDisabled,
        setIsButtonDisabled,
        finalPrice,
        setIsTableValid,
        isTableValid,
        setCurrentLocation,
        currentLocation,
        setStatus,
        status,
      }}>
        {children}
      </OrderContext.Provider>
    );
  }

  export default OrderProvider;
