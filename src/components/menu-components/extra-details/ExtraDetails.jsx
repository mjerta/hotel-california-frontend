import "./ExtraDetails.css"
import clockIcon from "../../../assets/clock-icon.svg"
import {useContext, useEffect, useState} from "react";
import {LocationContext} from "../../../context/LocationProvider.jsx";
import {OrderContext} from "../../../context/OrderProvider.jsx";
import InputTable from "./inputtable/InputTable.jsx";

function ExtraDetails({className}) {
  const [availableLocations, setAvailableLocations] = useState([]);

  const {locations} = useContext(LocationContext);
  const {
    setIsTableValid,
    isTableValid,
    setCurrentLocation,
    status,
    currentLocation
  } = useContext(OrderContext)
  const [error, setError] = useState(null);
  const [noLocationsFound, setNoLocationsFound] = useState(false);

  useEffect(() => {
    if (locations) {
      setNoLocationsFound(false)
      setAvailableLocations(locations
      .filter(location => !location.isOccupied)
      .map(location => location.locationNumber));
    } else {
      setNoLocationsFound(true)
    }
  }, [locations])

  function handleOnChange(e) {
    setIsTableValid(false)
    setCurrentLocation(null)

    const foundLocation = locations.find(
      (location) => location.locationNumber.toString() === e.target.value)
    if (!foundLocation) {
      setError("This is not a valid location")

    } else if (foundLocation.isOccupied === true) {
      setError("This location is already occupied")
    } else {
      setCurrentLocation(foundLocation.id)
      setError(null)
      setIsTableValid(true);
    }
  }

  return (
    <div className={`extra-details ${className ? className : ''}`}>
      <div className={"table-and-order"}>
        <h1>#
          <InputTable
            currentLocation={currentLocation}
            onChange={(e) => handleOnChange(e)}
            status={status}
            noLocationsFound={noLocationsFound}
            valid={isTableValid}
            text={"Enter your table number "}
          />
        </h1>
        <small>Available: {availableLocations && availableLocations.join(', ')}</small>
        {error &&
          <p className={"error"}>{error}</p>
        }
        <p><span><img src={clockIcon} alt="clock icon"/></span> estimated time:
                                                                20min</p>
      </div>
      <h1>Order Overview</h1>
    </div>
  )
}
export default ExtraDetails;