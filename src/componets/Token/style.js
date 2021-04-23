import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 9vh;
`;

export const TokenContainer = styled.div`
  display: flex;
  background-color: lightgray;
  width: 97%;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  padding: 0px;
`;

export const TokenDiv = styled.div`
  h1 {
    border: solid 2px black;
    margin-right: 15px;
    margin-left:2px;
  }
`;

export const FigureDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: bold;
    color: grey;
  }
`;
