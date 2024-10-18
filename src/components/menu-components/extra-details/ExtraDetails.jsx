import "./ExtraDetails.css"
import clockIcon from "../../../assets/clock-icon.svg"

function ExtraDetails({className}) {



  return (
    <div className={`extra-details ${className ? className : ''}`}>
      <div className={"table-and-order"}>
        <h1>#<input type={"text"}  placeholder={"Enter your table number"}/> </h1>
        <p><span><img src={clockIcon} alt="clock icon"/></span> estimated time: 20min</p>
      </div>
      <h1>Order Overview</h1>
    </div>
  )
}

export default ExtraDetails;