import Header from "./components/Header.tsx";
import Menu from "../components/Menu";
import Orders from "../components/Orders";
import { OrderProvider } from "../context/OrderProvider.tsx";

function Layout() {
  return (
    <OrderProvider>
      <Header />
      <main className={"max-w-7xl mx-auto py-20 grid md:grid-cols-2"}>
        <Menu />
        <Orders />
      </main>
      <footer className={"bg-gray-900 p-5"}>
        <p className={"text-center text-white"}>
          Matías Bubello {new Date().getFullYear()}
        </p>
      </footer>
    </OrderProvider>
  );
}

export default Layout;
