import { React } from "react";
import Logo from "./logo.component";
function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
