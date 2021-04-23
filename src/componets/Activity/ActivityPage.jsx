import React from "react";
import { ActivityDiv } from "./style";
import { Link } from "react-router-dom";

function ActivityPage() {
  return (
    <ActivityDiv>
      <h1>Activity Page</h1>
      <Link to='/' style={{textDecoration:'none'}}>
          <p>Go Home</p>
      </Link>
    </ActivityDiv>
  );
}

export default ActivityPage;
