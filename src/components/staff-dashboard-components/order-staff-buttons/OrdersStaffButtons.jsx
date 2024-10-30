import "./OrderStaffButtons.css"
import {useContext, useEffect} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import hasUserRole from "../../../helpers/hasUserRole.jsx";
import Button from "../../general-components/button/Button.jsx";
import useUpdateOrder
  from "../../../custom-hooks/api-requests/PATCH/updateOrderStatus.jsx";
import "../../../components/general-components/button/Variants.css"

function OrdersStaffButtons({className, id, destination, status, fetchOrders}) {
  const { loading, error, result, updateOrderStatus } = useUpdateOrder();
  const {roles} = useContext(AuthContext)

  useEffect(() => {
    if (result) {
      fetchOrders();
    }
  }, [result]);

  return (<div className={`order-staff-buttons ${className ? className : ''}`}>
    {hasUserRole("ROLE_CHEF", roles) && (<>
      {
        status === "IN_QUEUE" && (
          <Button
            onClick={() => updateOrderStatus(id, "PREPARING_ORDER", destination)}
            className={"order-staff-button"}
            text={loading ? "Loading..." : (error ? error : "Prepare order")}
          />
        )
      }
      {
        (status === "IN_QUEUE" || status === "PREPARING_ORDER") && (
          <Button
            onClick={() => updateOrderStatus(id, "ORDER_PREPARED", destination)}
            className={"order-staff-button"}
            text={loading ? "Loading..." : (error ? error : "order prepared")}
          />
        )
      }
    </>)}
    {!hasUserRole("ROLE_CHEF", roles) && hasUserRole("ROLE_STAFF", roles) && (<>
      {
        status === "ORDER_PREPARED" && (
          <Button
            onClick={() => updateOrderStatus(id, "ORDER_DELIVERED", destination)}
            className={"order-staff-button"}
            text={loading ? "Loading..." : (error ? error : "order delivered")}
          />
        )
      }
      {
        (status === "ORDER_PREPARED" || status === "ORDER_DELIVERED") && (
          <Button
            onClick={() => updateOrderStatus(id, "ORDER_PAYED")}
            className={"order-staff-button"}
            text={loading ? "Loading..." : (error ? error : "order payed")}
          />
        )
      }
    </>)}
  </div>)
}

export default OrdersStaffButtons;