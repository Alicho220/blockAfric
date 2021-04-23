import React from "react";
import { MarketDiv } from "./style";
import { Link } from "react-router-dom";

function MarketPage() {
  return (
    <MarketDiv>
      <h1>Market Page</h1>
      <Link to='/' style={{textDecoration:'none'}}>
          <p>Go Home</p>
      </Link>
    </MarketDiv>
  );
}

export default MarketPage;
