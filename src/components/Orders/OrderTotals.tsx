import H2 from "../H2.tsx";
import { OrderItem } from "../../types";
import { useMemo } from "react";
import { formatPrice } from "../../helpers";

type OrderItems = {
  orders: OrderItem[];
};
function OrderTotals({ orders }: OrderItems) {
  console.log(orders);
  const subTotalAmount = useMemo(() => {
    return orders.reduce((acc, order) => {
      return acc + order.price;
    }, 0);
  }, [orders]);

  return (
    <div className={"space-y-3 border-secondary border-t-2 pt-5"}>
      <H2 text={"TOTAL A PAGAR"}></H2>
      <dl className={"flex gap-x-3 items-center"}>
        <dt className={"text-tertiary"}>Subtotal:</dt>
        <dd className={"font-bold text-tertiary"}>
          {formatPrice(subTotalAmount)}
        </dd>
      </dl>
      <dl className={"flex gap-x-3 items-center"}>
        <dt className={"text-tertiary"}>Propina:</dt>
        <dd className={"font-bold text-tertiary"}>$0</dd>
      </dl>
      <dl className={"flex gap-x-3 items-center"}>
        <dt className={"text-tertiary"}>Total a pagar:</dt>
        <dd className={"font-bold text-tertiary"}>$0</dd>
      </dl>
      {/*<button type={"button"}>Reset</button>*/}
    </div>
  );
}

export default OrderTotals;
