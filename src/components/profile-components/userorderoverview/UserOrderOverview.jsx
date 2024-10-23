import "./UserOrderOverview.css"
import UserOrderOverviewBox
  from "./user-order-overview-box/UserOrderOverviewBox.jsx";
import useFetchOrdersByUser
  from "../../../custom-hooks/api-requests/GET/useFetchOrdersByUser.jsx";
import replaceDuplicatesByQty from "../../../helpers/replaceDuplicatesByQty.js";
import formatDateToDutch from "../../../helpers/formatDateToDutch.js";

function UserOrderOverview({className}) {

  const {ordersByUser, loading, error} = useFetchOrdersByUser();
  console.log(ordersByUser)

  return (
    <div className={`user-order-overview ${className ? className : ''}`}>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        ordersByUser.map((order) => (
          <UserOrderOverviewBox
            key={order.id}
            meals={replaceDuplicatesByQty(order.meals)}
            date={formatDateToDutch(order.orderDate)}
          />
        ))

      )
      }
    </div>

  )
}

export default UserOrderOverview;