import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="flex flex-col min-h-screen ">
    <Navbar />
    <main className="flex-grow mt-16 pb-24 overflow-auto ">
      <Outlet /> {/* Route content appears here */}
    </main>
    <Footer />
  </div>
);

export default Layout;



