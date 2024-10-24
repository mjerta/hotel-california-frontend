import "./OrderItem.css"
import MenuTitle from "../../card/menu-title/MenuTitle.jsx";
import convertPrice from "../../../../helpers/convertPrice.js";
import RemoveButton
  from "../../../general-components/remove-button/RemoveButton.jsx";

function OrderItem({className, name, description, price, onClick, status}) {
  return (
    <div className={`order-item ${className ? className : ''}`}>
      {
        !status && (
          <RemoveButton
            onClick={onClick}
            alt={"remove-button"}
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