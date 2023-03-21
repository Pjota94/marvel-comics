import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 45px;
    line-height: 63px;
    font-family: "Jockey One";
    font-style: normal;
    color: #ffffff;
    text-align: center;
    margin-bottom: 44px;
  }

  @media (max-width: 810px) {
    h1 {
      font-size: 35px;
    }
  }

  @media (max-width: 510px) {
    h1 {
      font-size: 25px;
      margin-bottom: 17px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    margin-right: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 266px;
    height: 272px;
    background: linear-gradient(
      45deg,
      #46110b,
      #671612,
      #8b1918,
      #b01a1d,
      #d61923
    );
    background-size: 300% 300%;
    box-shadow: 0px 0px 2px 4px rgba(177, 27, 27, 0.25);
    animation: colors 1.8s ease-in-out infinite;

    @keyframes colors {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }
  }

  .img > img {
    width: 250px;
    height: 250px;
    cursor: pointer;
  }

  .description {
    display: flex;
    flex-direction: column;
    height: 272px;
  }

  .description > h2 {
    color: #ffffff;
    font-family: "Jockey One";
    font-style: normal;
    font-size: 27px;
    line-height: 63px;
    margin-bottom: -11px;
  }

  .description > p {
    color: #ffffff;
    font-family: "Jockey One";
    font-style: normal;
    font-size: 16px;
    line-height: 32px;
    width: 394px;
  }

  @media (max-width: 810px) {
    flex-direction: column;

    .img {
      margin-right: 0px;
    }
  }

  @media (max-width: 510px) {
    flex-direction: column;

    .img {
      margin-right: 0px;
    }

    .description > p {
      width: 271px;
    }

    .description > h2 {
      font-size: 23px;
    }
  }
`;
