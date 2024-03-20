import React, { createContext, ReactNode, useState } from "react";
import { MenuItem, OrderItem } from "../types";

type OrderContextType = {
  orders: OrderItem[];
  addItem: (item: MenuItem) => void;
  removeOrder: (id: number) => void;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: ReactNode;
};

const OrderContext = createContext<OrderContextType | null>(null);

const OrderProvider: React.FC<Props> = ({ children }: Props) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState<number>(0);

  const addItem = (item: MenuItem) => {
    const itemExists = orders.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const updatedOrder = orders.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
      setOrders(updatedOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrders([...orders, newItem]);
    }
  };

  const removeOrder = (id: number) => {
    const updatedOrder = orders.filter((orderItem) => orderItem.id !== id);
    setOrders(updatedOrder);
  };

  return (
    <OrderContext.Provider
      value={{ orders, addItem, removeOrder, tip, setTip }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider };

export default OrderContext;
