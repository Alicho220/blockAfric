import React from "react";
import { ImHome3 } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { AiFillGift } from "react-icons/ai";
import { MenuContainer } from "./style";

function Menu() {
  return (
    <MenuContainer>
      <ImHome3 />
      <FaWallet />
      <MdLocalActivity />
      <IoStorefrontSharp />
      <AiFillGift />
    </MenuContainer>
  );
}

export default Menu;
