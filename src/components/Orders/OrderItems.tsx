import { OrderItem } from "../../types";

type OrderItems = {
  order: OrderItem;
};

function OrderItems({ order }: OrderItems) {
  const { quantity } = order;
  return <div>{quantity}</div>;
}

export default OrderItems;
