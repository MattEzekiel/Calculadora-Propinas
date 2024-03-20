import Header from "./components/Header.tsx";
import Menu from "../components/Menu";
import Orders from "../components/Orders";
import Footer from "./components/Footer.tsx";
import "@fontsource-variable/inter";

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
      <Footer />
    </div>
  );
}

export default Layout;
