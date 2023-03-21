import styled from "styled-components";

export const Container = styled.div`
  width: 149px;
  height: 212px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

  &&:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }

  @media (max-width: 375px) {
    &&:hover {
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.1);
      transition: 300ms linear;
    }
  }

  img {
    width: 139px;
    height: 203px;
    cursor: pointer;
  }
`;
