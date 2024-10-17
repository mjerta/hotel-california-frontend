import "./MenuTitle.css"

function MenuTitle({className, name, description}) {
  return (
    <div className={`menu-title ${className ? className : ''}`}>
      <p>{name}</p>
      <p className={"description"}>{description}</p>
    </div>
  )
}

export default MenuTitle;