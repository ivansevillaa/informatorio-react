import { Outlet } from "react-router-dom";
import Nav from "../Nav";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout;
