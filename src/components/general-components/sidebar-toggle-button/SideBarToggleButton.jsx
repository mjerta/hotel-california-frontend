import "./SideBarToggleButton.css"
import "./Variants.css"

function SideBarToggleButton({className, openSideBar, currentOrder, setOpenSideBar, image, alt}) {
  return (
    <div
      className={`sidebar-toggle-button ${className ? className : ''} ${openSideBar ? "img-enforce" : ""}`}>
      <div className="inside-img-container">
        {currentOrder && currentOrder.length > 0 && (
          <span className="absolute-element">
            {currentOrder.length}
          </span>
        )}
        <img
          onClick={() => setOpenSideBar(prev => !prev)}
          className={`img`}
          src={image} alt={alt}
        />
      </div>
    </div>
  )
}
export default SideBarToggleButton;