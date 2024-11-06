import "./UserOrderOverview.css"
import UserOrderOverviewBox
  from "./user-order-overview-box/UserOrderOverviewBox.jsx";
import useFetchOrdersByUser
  from "../../../custom-hooks/api-requests/GET/useFetchOrdersByUser.jsx";
import replaceDuplicatesByQty from "../../../helpers/replaceDuplicatesByQty.js";
import formatDateToDutch from "../../../helpers/formatDateToDutch.js";

function UserOrderOverview({className}) {

  const {ordersByUser, loading, error} = useFetchOrdersByUser();

  return (
    <div className={`user-order-overview ${ordersByUser.length === 0 && 'put-in-middle'} ${className ? className : ''}`}>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : ordersByUser.length === 0 ? (
          <h1>No orders available</h1>
        ) :
        (
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