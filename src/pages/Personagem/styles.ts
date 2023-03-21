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
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .description > h2 {
    color: #ffffff;
    font-family: "Jockey One";
    font-style: normal;
    font-size: 45px;
    line-height: 63px;
    margin-bottom: 10px;
  }

  .description > p {
    color: #ffffff;
    font-family: "Jockey One";
    font-style: normal;
    font-size: 20px;
    line-height: 32px;
    width: 500px;
  }
`;
