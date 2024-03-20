import Layout from "./layouts/Layout.tsx";
import { OrderProvider } from "./context/OrderProvider.tsx";

function App() {
  return (
    <OrderProvider>
      <Layout />
    </OrderProvider>
  );
}

export default App;
