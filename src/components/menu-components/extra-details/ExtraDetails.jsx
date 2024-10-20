import "./ExtraDetails.css"
import clockIcon from "../../../assets/clock-icon.svg"
import {useContext, useState} from "react";
import {LocationContext} from "../../../context/LocationProvider.jsx";
import {OrderContext} from "../../../context/OrderProvider.jsx";

function ExtraDetails({className}) {

  const {locations} = useContext(LocationContext);
  const {setIsTableValid, setCurrentLocation, status, currentLocation} = useContext(OrderContext)
  const [error, setError] = useState(null);
  console.log(locations)

  function handleOnChange(e) {
    console.log(e.target.value)
    setIsTableValid(false)
    setCurrentLocation(null)

    const foundLocation = locations.find(
      (location) => location.locationNumber.toString() === e.target.value)
    console.log(foundLocation)
    if (!foundLocation) {
      console.log("This is not a valid location")
      setError("This is not a valid location")

    } else if (foundLocation.isOccupied === true) {
      setError("This location is already oocupied")
    } else {
      console.log("This is a valid location")
      setCurrentLocation(foundLocation.id)
      setError(null)
      setIsTableValid(true);
    }
  }

  return (
    <div className={`extra-details ${className ? className : ''}`}>
      <div className={"table-and-order"}>
        <h1>#<input disabled={status} onChange={(e) => handleOnChange(e)} type={"text"}
                    placeholder={status ? currentLocation :  "Enter your table number"}/>
        </h1>
        {error &&
          <p>{error}</p>
        }
        <p>
        </p>
        <p><span><img src={clockIcon} alt="clock icon"/></span> estimated time:
                                                                20min</p>
      </div>
      <h1>Order Overview</h1>
    </div>
  )
}

export default ExtraDetails;