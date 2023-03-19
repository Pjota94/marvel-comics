import styled from "styled-components";

export const Container = styled.header`
  height: 98px;
  background: #030305;
  box-shadow: rgba(210, 11, 11, 0.25) 2px 7px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  button {
    border: none;
    background-color: transparent;
    color: white;
    font-size: 40px;
    margin-left: 39px;
  }

  img {
    width: 124.97px;
    height: 80px;
    cursor: pointer;
  }

  p {
    margin-right: 39px;
  }
`;
