import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function RootLayout() {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet />
      </main>
      <Footer text = "Made by Ana Torres for VIP company tryout"/>
    </>
  );
}
