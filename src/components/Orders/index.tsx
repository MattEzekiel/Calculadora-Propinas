import H2 from "../H2.tsx";
import OrderItems from "./OrderItems.tsx";
import useOrderContext from "../../hooks/useOrders.ts";

function Orders() {
  const { orders, removeOrder } = useOrderContext();

  return (
    <section
      className={
        "border border-dashed border-teal-400 p-5 rounded space-y-5 max-h-screen overflow-y-auto"
      }>
      <H2 text={"Orden"} />
      {orders.length ? (
        orders.map((order) => (
          <OrderItems key={order.id} order={order} removeOrder={removeOrder} />
        ))
      ) : (
        <p className={"text-center"}>No hay ordenes en este momento</p>
      )}
    </section>
  );
}

export default Orders;
