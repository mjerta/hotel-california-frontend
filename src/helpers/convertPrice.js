
function ConvertPrice(originalFormat) {
  return Number(originalFormat).toFixed(2).replace('.',',');
}

export default ConvertPrice;