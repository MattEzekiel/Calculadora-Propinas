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
      <p className={"text-tertiary text-2xl"}>
        {name} - {formatPrice(price * quantity)}
      </p>
      <p className={"font-bold text-tertiary"}>Cantidad: {quantity}</p>
      <button
        className={
          "absolute top-2.5 right-0 text-red-500 border-2 rounded-full border-red-500 p-0.5 text-center grid items-center group hover:bg-red-500 transition-colors duration-300"
        }
        type={"button"}
        aria-labelledby={"eliminar"}
        onClick={() => removeOrder(order.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 group-hover:rotate-180 transition duration-300 group-hover:text-red-800">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default OrderItems;
