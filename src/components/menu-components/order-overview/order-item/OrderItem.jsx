import "./OrderItem.css"
import deleteIcon from "../../../../assets/remove-btn.svg"
import MenuTitle from "../../card/menu-title/MenuTitle.jsx";
import convertPrice from "../../../../helpers/convertPrice.js";

function OrderItem({className, name, description, price, onClick, status}) {
  return (
    <div className={`order-item ${className ? className : ''}`}>
      {
        !status && (
          <img
            onClick={onClick}
            src={deleteIcon}
            alt="remove button"
          />
        )
      }
      <MenuTitle
        name={name}
        description={description}
      />
      <p>€{convertPrice(price)}</p>
    </div>
  )
}

export default OrderItem;