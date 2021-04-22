import React from "react";
import { Bars, Nav, NavIcon, NavLink, Contact } from "./style";


function Navbar({ toggle }) {
  return (
    <Nav>
      <NavLink to="/">
           LOGO
      </NavLink>
      <NavIcon>
        <Contact />
        <Bars />
      </NavIcon>
    </Nav>
  );
}

export default Navbar;
