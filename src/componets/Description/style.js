import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  background-color: lightgray;
  width: 99.5vw;
  border: solid grey 2px;

  h2 {
    font-size: large;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    margin-left: 5px;
    margin-right: 65px;
  }
`;
