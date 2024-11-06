import "./OrderExtraDetails.css"
import getTimByHours from "../../../helpers/getTimByHours.js";
import getTimeDifference from "../../../helpers/getTimeDifference.js";

function OrderExtraDetails({classname, locationType, locationNumber, orderDate}) {
  return (
    <div className={`order-extra-details ${classname ? classname : ''}`}>
      <div className="extra-details-row">
        <span>
          Loc: {locationType} {locationNumber}
        </span>
      </div>
      <div className="extra-details-row">
        <span>
          {getTimByHours(orderDate)}
        </span>

        <span>
          {getTimeDifference(orderDate)}
        </span>
      </div>
    </div>
  )
}
export default OrderExtraDetails;