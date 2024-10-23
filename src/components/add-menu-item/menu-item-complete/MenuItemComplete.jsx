import "./MenuItemComplete.css"

import foodImage from "../../../assets/menu-image.png"
import convertPrice from "../../../helpers/convertPrice.js";

function MenuItemComplete({
                            className,
                            image,
                            description,
                            price,
                            ingredients,
                            name
                          }) {
  return (
    <article className={`-menu-item-complete ${className ? className : ''}`}>
      <div className="img-container">
        <img src={image ? image : foodImage} alt="menu-image"/>
      </div>
      <figcaption>
        <strong>{name}</strong>
        <p className="text-group">
          <span
            className="description">{description && description.slice(0, 10)}...</span>
          <span>€{convertPrice(price)}</span>
        </p>
        <strong>Ingredients</strong>
        <ul>
          {ingredients && ingredients.length > 0 && ingredients.map(ingredient => (
            <li key={ingredient.id}>
              {ingredient.name}
            </li>
          ))}
        </ul>
      </figcaption>
    </article>
  )
}

export default MenuItemComplete;