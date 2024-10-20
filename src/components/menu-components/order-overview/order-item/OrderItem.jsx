import "./OrderItem.css"
import deleteIcon from "../../../../assets/remove-btn.svg"
import MenuTitle from "../../card/menu-title/MenuTitle.jsx";
import convertPrice from "../../../../helpers/convertPrice.js";

function OrderItem({className, name, description, price, onClick}) {
  // const {setCurrentOrder, currentOrder} = useContext(OrderContext);

  return (
    <div className={`order-item ${className ? className : ''}`}>
      <img
        onClick={onClick}
        // onClick={removeItemFromOrder}
        src={deleteIcon}
        alt="remove button"
      />
      <MenuTitle
        name={name}
        description={description}
      />
      <p>€{convertPrice(price)}</p>
    </div>
  )
}

export default OrderItem;