import React from "react";
import { EarnDiv } from "./style";
import { Link } from "react-router-dom";

function EarnPage() {
  return (
    <EarnDiv>
      <h1>Earn Page</h1>
      <Link to='/' style={{textDecoration:'none'}}>
          <p>Go Home</p>
      </Link>
    </EarnDiv>
  );
}

export default EarnPage;
