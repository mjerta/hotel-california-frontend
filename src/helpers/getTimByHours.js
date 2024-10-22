function getTimByHours(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString([],{ hour: '2-digit', minute: '2-digit' });
}

export default getTimByHours;