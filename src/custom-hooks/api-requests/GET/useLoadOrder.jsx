import {useEffect} from 'react';
import axios from 'axios';

function useLoadOrder(setCurrentOrder, setStatus, setCurrentLocation, token) {
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const localOrderReference = localStorage.getItem("orderReference");
    const localOrderId = localStorage.getItem("id");

    if (localOrderReference) {
      async function loadOrderWithOrderReference() {
        try {
          console.log(localOrderReference);
          const response = await axios.get(`${baseUrl}/api/v1/orders/orderrefence`, {
            params: {orderReference: localOrderReference},
          });
          const data = response.data;
          console.log(data);
          setCurrentOrder(data.meals);
          setStatus(data.status);
          setCurrentLocation(data.destination.locationNumber);
        } catch (e) {
          console.error(e);
        }
      }

      loadOrderWithOrderReference();
    } else if (localOrderId && token) {
      async function loadOrderWithId() {
        try {
          console.log(localOrderId);
          const response = await axios.get(`${baseUrl}/api/v1/orders/${localOrderId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = response.data;
          console.log(data);
          setCurrentOrder(data.meals);
          setStatus(data.status);
          setCurrentLocation(data.destination.locationNumber);
        } catch (e) {
          console.error(e);
        }
      }

      loadOrderWithId();
    }
  }, [token]); // Only depend on token
};

export default useLoadOrder;
