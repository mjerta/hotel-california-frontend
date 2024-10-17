import "./ReceiptOverview.css"
function ReceiptOverview({className}) {
  return (
    <div className={`receipt-overview ${className ? className : ''}`}>
      <p>This is going to be the receipt</p>
    </div>

  )
}

export default ReceiptOverview;

