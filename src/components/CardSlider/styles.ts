import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const BoxSlider = styled.div`
  width: 375px;

  @media (max-width: 550px) {
    width: 325px;

    .swiper-container {
      width: 365px;
    }
  }
`;
