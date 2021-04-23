import React from "react";
import { ImHome3 } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { AiFillGift } from "react-icons/ai";
import { MenuContainer } from "./style";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <MenuContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="icon">
          <ImHome3 />
          <h3>Home</h3>
        </div>
      </Link>

      <Link to="/activity" style={{ textDecoration: "none" }}>
        <div className="icon">
          <MdLocalActivity />
          <h3>Activity</h3>
        </div>
      </Link>

      <Link to="/wallet" style={{ textDecoration: "none" }}>
        <div className="icon">
          <FaWallet />
          <h3>Wallet</h3>
        </div>
      </Link>
      <Link to="/market" style={{ textDecoration: "none" }}>
        <div className="icon">
          <IoStorefrontSharp />
          <h3>Market</h3>
        </div>
      </Link>
      <Link to="/earn" style={{ textDecoration: "none" }}>
        <div className="icon">
          <AiFillGift />
          <h3>Earn</h3>
        </div>
      </Link>
    </MenuContainer>
  );
}

export default Menu;
