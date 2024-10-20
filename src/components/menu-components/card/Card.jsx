import "./Card.css"
import foodImage from "../../../assets/menu-image.png"
import addButton from "../../../assets/add-button.svg"
import convertPrice from "../../../helpers/convertPrice.js";
import useFetchOrderItem
  from "../../../custom-hooks/api-requests/GET/UseFetchOrderItem.jsx";

function Card({className, name, image, description, price, id, status}) {

  const {addMealToOrder} = useFetchOrderItem();

  return (
    <article
      className={`card${className ? className : ''}`}
    >
      <img src={image ? image : foodImage} alt="menu-image"/>
      {
        !status && (
          <img
            onClick={() => addMealToOrder(id)}
            className={"add-button"}
            src={addButton}
            alt={"add-button"}
          />
        )}
      <figcaption>
        <div className="menu-details">
          <p>{name}</p>
          <p className={"description"}>{description}</p>
        </div>
        <div className="price">€{convertPrice(price)}</div>
      </figcaption>
    </article>
  )
}

export default Card;