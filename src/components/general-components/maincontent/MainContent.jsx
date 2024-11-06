import "./MainContent.css"
import "./Variants.css"
function MainContent({className, children}) {
  return (
    <div className={`main-content ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default MainContent;