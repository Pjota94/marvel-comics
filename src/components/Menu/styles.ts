import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    left: 50px;
    top: 36px;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 40px;
  }

  button:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }
`;
