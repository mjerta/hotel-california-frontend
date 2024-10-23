import "./MainContentSection.css"

function MainContentSection({classname, children}) {
  return (
    <section className={`main-content-section ${classname ? classname : ''}`}>
      {children}
    </section>
  )
}

export default MainContentSection;