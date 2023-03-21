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

  img {
    height: 694px;
  }

  @media (max-width: 1316px) {
    img {
      height: 594px;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 340px;
    }
  }
`;
