import "./OrderItem.css"
import deleteIcon from "../../../../assets/add-button.svg"
import MenuTitle from "../../card/menu-title/MenuTitle.jsx";
import convertPrice from "../../../../helpers/convertPrice.js";
import useFetchOrderItem
  from "../../../../custom-hooks/api-requests/GET/UseFetchOrderItem.jsx";

function OrderItem({className, id}) {
  const { orderItemData, loading, error} = useFetchOrderItem(id);
  return (
    <div className={`order-item ${className ? className : ''}`}>
      <img src={deleteIcon} alt="remove button"/>
      {loading ? (
        <p>Loading...</p>
      ) : error ?
        (
          <p>{error}</p>
        )
        :
        (
          <>
            <MenuTitle
              name={orderItemData.name}
              description={orderItemData.description}
            />
            <p>€{convertPrice(orderItemData.price)}</p>
          </>
        )
      }
    </div>
  )
}

export default OrderItem;