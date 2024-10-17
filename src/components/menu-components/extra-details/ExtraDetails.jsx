import "./ExtraDetails.css"
function ExtraDetails({className}) {
  return (
    <div className={`extra-details${className ? className : ''}`}>
      <h1>#120</h1>
      <p>estimated time: 20min</p>
    </div>
  )
}

export default ExtraDetails;