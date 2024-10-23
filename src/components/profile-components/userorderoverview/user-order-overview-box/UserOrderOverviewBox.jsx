import "./UserOrderOverviewBox.css"
import QtyCircle from "../../../general-components/qty-cirle/QtyCircle.jsx";

function UserOrderOverviewBoX({className, meals, date}) {
  return (
    <div className={`user-order-overview-box ${className ? className : ''}`}>
      <div className="inner-order-box">
        <span>{date}</span>
        <div className={"order-box-menu-details"}>
          {meals.map((meal) => (
            <div className={"inner-box-menu-details"} key={meal.id}>
              <QtyCircle
                className={"qty-circle-profile"}
                qty={meal.qty}
              />
              <span>{meal.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserOrderOverviewBoX;