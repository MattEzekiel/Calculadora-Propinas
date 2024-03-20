import { useContext } from "react";
import OrderContext from "../context/OrderProvider.tsx";

const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error(
      "useOrderContext debe ser usado dentro de un OrderProvider",
    );
  }
  return context;
};

export default useOrderContext;
