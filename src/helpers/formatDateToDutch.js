function formatDateToDutch(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('nl-NL')
}
export default formatDateToDutch;
