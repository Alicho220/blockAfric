import React from "react";
import { WalletDiv } from "./style";
import { Link } from "react-router-dom";

function WalletPage() {
  return (
    <WalletDiv>
      <h1>Wallet Page</h1>
      <Link to='/' style={{textDecoration:'none'}}>
          <p>Go Home</p>
      </Link>
    </WalletDiv>
  );
}

export default WalletPage;
