import React from "react";
import BalanceDisplay from "./Balance/BalanceDisplay";
import ButtonArea from "./Button/ButtonArea";
import Description from "./Description/Description";
import Menu from "./Menu/Menu";
import Navbar from "./NavBar/Navbar";
import RecentActivity from "./Recent/RecentActivity";
import Select from "./Select/Select";
import Token from "./Token/Token";

function Index() {
  return (
    <div>
      <Navbar />
      <BalanceDisplay />
      <Select />
      <Token />
      <ButtonArea />
      <RecentActivity />
      <Description />
      <Menu />
    </div>
  );
}

export default Index;
