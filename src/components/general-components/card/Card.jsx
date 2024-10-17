import "./Card.css"
import foodImage from "../../../assets/menu-image.png"
import addButton from "../../../assets/add-button.svg"
function Card({className}) {
  return (
    <article
      className={`card${className ? className : ''}`}
    >
      <img src={foodImage} alt="menu-image"/>
      <img className={"add-button"} src={addButton} alt={"add-button"}/>
      <figcaption>
        <div className="menu-details">
          <p>menu item</p>
          <p className={"description"}>Erg lekker</p>
        </div>
        <div className="price">€12,95</div>
      </figcaption>


    </article>
  )
}

export default Card;