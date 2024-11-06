function getTimeDifference(date) {
  const givenDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = currentDate - givenDate;

  const totalMinutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Format the result to "HH:mm" format
  const formattedTimeDifference = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return formattedTimeDifference;

}
export default getTimeDifference;