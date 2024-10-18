import "./OrderItem.css"
import deleteIcon from "../../../../assets/remove-btn.svg"
import MenuTitle from "../../card/menu-title/MenuTitle.jsx";
import convertPrice from "../../../../helpers/convertPrice.js";
import {useContext} from "react";
import {OrderContext} from "../../../../context/OrderProvider.jsx";

function OrderItem({className, name, description, price, id}) {
  const {setCurrentOrder, currentOrder} = useContext(OrderContext);

  function removeItemFromOrder() {
    const updatedItems = currentOrder.filter((item) => item.id !== id);
    setCurrentOrder(updatedItems);
  }

  return (
    <div className={`order-item ${className ? className : ''}`}>
      <img
        onClick={removeItemFromOrder}
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