import Header from "./components/Header.tsx";
import Menu from "../components/Menu";
import Orders from "../components/Orders";

function Layout() {
  return (
    <div className={"max-h-screen overflow-hidden"}>
      <Header />
      <main
        className={
          "max-w-7xl mx-auto pt-10 pb-20 grid md:grid-cols-2 h-[calc(100vh-140px)] overflow-hidden"
        }>
        <Menu />
        <Orders />
      </main>
      <footer className={"bg-gray-900 p-4 min-h-[60px]"}>
        <p className={"text-center text-white"}>
          Matías Bubello {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Layout;
