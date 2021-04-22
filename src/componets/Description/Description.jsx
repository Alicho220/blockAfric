import React from "react";
import { DescriptionContainer, FirstRow } from "./style";

function Description() {
  return (
    <DescriptionContainer>
      <FirstRow>
        <h2>Date</h2>
        <h2>Description</h2>
        <h2> Amount</h2>
      </FirstRow>
      <FirstRow>
        <h2>1/2/21</h2>
        <h2>Sent</h2>
        <h2 style={{ marginLeft: "40px" }}>N100.00</h2>
      </FirstRow>
      <FirstRow>
        <h2>2/2/21</h2>
        <h2>Received</h2>
        <h2 style={{ marginLeft: "8px" }}>N100.00</h2>
      </FirstRow>
      <FirstRow>
        <h2>1/2/21</h2>
        <h2>Sent</h2>
        <h2 style={{ marginLeft: "40px" }}>N100.00</h2>
      </FirstRow>
    </DescriptionContainer>
  );
}

export default Description;
