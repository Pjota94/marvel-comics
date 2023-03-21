import styled from "styled-components";

export const Container = styled.div`
  width: 149px;
  height: 212px;
  background: #d9b911;
  box-shadow: 0px 0px 2px 4px #857002;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right top,
    #a48f21,
    #bba61f,
    #d2bf1a,
    #e9d812,
    #fff200
  );
  background-size: 300% 300%;
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

  img {
    width: 139px;
    height: 203px;
    cursor: pointer;
  }
`;
