import {createContext, useState} from "react";
import axios from "axios";

export const OrderContext = createContext();

function OrderProvider({children}) {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state
  const baseUrl = import.meta.env.VITE_API_URL;

  // Function to fetch meal details by ID and add it to the current order
  async function addMealToOrder(id) {
    try {
      setLoading(true);
      setError(null); // Reset error before the request
      const response = await axios.get(`${baseUrl}/api/v1/meals/${id}`);
      const meal = response.data;

      // Add the meal to the current order
      setCurrentOrder((prevOrder) => [...prevOrder, meal]);
    } catch (e) {
      setError("Error fetching meal data: " + (e.response?.data?.message || e.message));
    } finally {
      setLoading(false);
    }
  }

  return (
    <OrderContext.Provider value={{
      currentOrder,
      addMealToOrder,
      loading,  // Expose loading state
      error,    // Expose error state
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
