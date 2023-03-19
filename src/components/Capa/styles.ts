import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 38px;
  }

  @media (max-width: 648px) {
    img {
      margin-left: 0px;
    }
  }

  @media (max-width: 1645px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 1463px) {
    img {
      width: 550px;
    }
  }

  @media (max-width: 1316px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 667px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 502px) {
    img {
      width: 370px;
      margin-top: 50px;
    }
  }
`;
