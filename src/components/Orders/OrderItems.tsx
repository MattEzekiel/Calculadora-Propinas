import { OrderItem } from "../../types";
import { formatPrice } from "../../helpers";

type OrderItems = {
  order: OrderItem;
  removeOrder: (id: number) => void;
};

function OrderItems({ order, removeOrder }: OrderItems) {
  const { quantity, name, price } = order;
  return (
    <div className={"relative border-t border-gray-200 p-5"}>
      <p>
        {name} - {formatPrice(price * quantity)}
      </p>
      <p className={"font-bold"}>Cantidad: {quantity}</p>
      <button
        className={
          "absolute top-2.5 right-0 text-red-500 border rounded-full border-red-500 py-1 px-2.5 uppercase font-medium text-center grid items-center"
        }
        type={"button"}
        aria-labelledby={"eliminar"}
        onClick={() => removeOrder(order.id)}>
        X
      </button>
    </div>
  );
}

export default OrderItems;
