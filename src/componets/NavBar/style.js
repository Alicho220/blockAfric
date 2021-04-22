import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsBell } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

export const Nav = styled.nav`
  background: transparent;
  /* background-color: red; */
  height: 80px;
  display: flex;
  align-items: center;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const NavLink = styled(Link)`
  color: #000;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  width: 40%;
  border: solid 2px grey;
`;

export const NavIcon = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  color: red;
`;

export const Bars = styled(BsBell)`
  font-size: 2rem;
  transform: translate(-50% -50);
`;

export const Contact = styled(IoMdContact)`
  font-size: 2rem;
  transform: translate(-50% -50);
`;
