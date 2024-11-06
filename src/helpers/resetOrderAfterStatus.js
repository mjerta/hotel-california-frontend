function resetOrderAfterStatus(status, localStorageItem, intervalId, setCurrentOrder, setCurrentLocation, setStatus, data) {
  if (data.status === status) {
    // Reset everything
    setCurrentOrder([]);
    setStatus(null);
    setCurrentLocation(null);
    localStorage.removeItem(localStorageItem);
    clearInterval(intervalId)
  } else {
    // Update state with fetched data
    setCurrentOrder(data.meals);
    setStatus(data.status);
    setCurrentLocation(data.destination.locationNumber);
  }
}
export default resetOrderAfterStatus;