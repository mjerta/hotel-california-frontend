export function filterOrdersByCurrentMonth(orders) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  return orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
  });
}

export function filterOrdersByCurrentWeek(orders) {
  const currentDate = new Date();

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
  endOfWeek.setHours(23, 59, 59, 999);

  return orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return orderDate >= startOfWeek && orderDate <= endOfWeek;
  });
}

export function filterOrdersByCurrentDay(orders) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return (
      orderDate.getDate() === currentDay &&
      orderDate.getMonth() === currentMonth &&
      orderDate.getFullYear() === currentYear
    );
  });
}