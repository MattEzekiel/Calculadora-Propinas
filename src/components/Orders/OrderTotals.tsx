import H2 from "../H2.tsx";
import { OrderItem } from "../../types";
import { useMemo } from "react";
import { formatPrice } from "../../helpers";

type OrderItems = {
  orders: OrderItem[];
  tip: number;
  placeOrder: () => void;
};
function OrderTotals({ orders, tip, placeOrder }: OrderItems) {
  const subTotalAmount = useMemo(() => {
    return orders.reduce((acc, order) => {
      return acc + order.price;
    }, 0);
  }, [orders]);

  const tipsAmount = useMemo(() => {
    return subTotalAmount * tip;
  }, [subTotalAmount, tip]);

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
        <dd className={"font-bold text-tertiary"}>{formatPrice(tipsAmount)}</dd>
      </dl>
      <dl className={"flex gap-x-3 items-center"}>
        <dt className={"text-tertiary"}>Total a pagar:</dt>
        <dd className={"font-bold text-tertiary"}>
          {formatPrice(subTotalAmount + tipsAmount)}
        </dd>
      </dl>
      <button
        type={"button"}
        className={
          "bg-primary hover:bg-tertiary text-white uppercase border border-primary px-4 py-2 hover:border-tertiary rounded disabled:bg-primary/50 disabled:text-tertiary/40 disabled:border-tertiary/40 disabled:cursor-not-allowed block w-full mt-5 transition-colors duration-300"
        }
        disabled={orders.length === 0}
        onClick={placeOrder}>
        Guardar orden
      </button>
    </div>
  );
}

export default OrderTotals;
