import "./QtyCircle.css"
import "./Variants.css"

function QtyCircle({className, qty }) {
  return (
    <div className={`qty-circle ${className ? className : ''}`}>
      <span>{qty}</span>
    </div>
  )
}

export default QtyCircle;