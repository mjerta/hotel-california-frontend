import "./SideBar.css"
import "./Variants.css"

function SideBar({className, children, openSideBar}) {
  //

  return (
    <aside
      className={`sidebar ${className} ${openSideBar ? "sidebar-full-screen" : ""}`}
    >
      <div
        className={`sidebar-content ${openSideBar ? "open-sidebar-content" : ''}`}
      >
        {children}
      </div>
    </aside>
  )
}

export default SideBar;