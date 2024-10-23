import {useEffect} from 'react';
import axios from 'axios';

function useLoadOrder(setCurrentOrder, setStatus, setCurrentLocation, token, status) {
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {

    const localOrderReference = localStorage.getItem("orderReference");
    const localOrderId = localStorage.getItem("id");

    async function fetchOrder() {
      if (localOrderReference) {

        try {
          const response = await axios.get(`${baseUrl}/api/v1/orders/orderreference`, {
            params: {orderReference: localOrderReference},
          });
          const data = response.data;
          // Check if the order status is ORDER_PAYED
          if (data.status === "ORDER_PAYED") {
            // Reset everything
            setCurrentOrder([]);
            setStatus(null);
            setCurrentLocation(null);
            localStorage.removeItem("orderReference"); // Optionally clear local storage
            clearInterval(intervalId)
          } else {
            // Update state with fetched data
            setCurrentOrder(data.meals);
            setStatus(data.status);
            setCurrentLocation(data.destination.locationNumber);
          }
        } catch (e) {
          setCurrentOrder([])
          console.error(e);
        }

      } else if (localOrderId && token) {
        try {
          const response = await axios.get(`${baseUrl}/api/v1/orders/${localOrderId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = response.data;
          // Check if the order status is ORDER_PAYED
          if (data.status === "ORDER_PAYED") {
            // Reset everything
            setCurrentOrder([]);
            setStatus(null);
            setCurrentLocation(null);
            localStorage.removeItem("id"); // Optionally clear local storage
            // Stop the interval
            clearInterval(intervalId);
          } else {
            // Update state with fetched data
            setCurrentOrder(data.meals);
            setStatus(data.status);
            setCurrentLocation(data.destination.locationNumber);
          }
        } catch (e) {
          console.error(e.response.data);
        }
      }
    }
    void fetchOrder();

    // Set up interval for updates every 10 seconds
    const intervalId = setInterval(fetchOrder, 10000);
    // Clean up the interval on unmount
    if (token == null) {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId);
  }, [token, status]); // Only depend on token
};

export default useLoadOrder;
