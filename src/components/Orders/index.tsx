import H2 from "../H2.tsx";
import OrderItems from "./OrderItems.tsx";
import useOrderContext from "../../hooks/useOrders.ts";
import OrderTotals from "./OrderTotals.tsx";
import Tips from "./Tips.tsx";

function Orders() {
  const { orders, removeOrder } = useOrderContext();

  return (
    <section
      className={
        "border border-dashed border-primary p-5 rounded space-y-5 max-h-full overflow-y-auto"
      }>
      <H2 text={"Orden"} />
      {orders.length ? (
        orders.map((order) => (
          <OrderItems key={order.id} order={order} removeOrder={removeOrder} />
        ))
      ) : (
        <p className={"text-center"}>No hay ordenes en este momento</p>
      )}
      <Tips />
      <OrderTotals orders={orders} />
    </section>
  );
}

export default Orders;
