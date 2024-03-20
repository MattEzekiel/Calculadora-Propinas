import Header from "./components/Header.tsx";
import Menu from "../components/Menu";
import Order from "../components/Order";

function Layout() {
  return (
    <>
      <Header />
      <main className={"max-w-7xl mx-auto py-20 grid md:grid-cols-2"}>
        <Menu />
        <Order />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
