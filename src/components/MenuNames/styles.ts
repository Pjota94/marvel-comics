import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px;

  img {
    cursor: pointer;
  }

  img:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }
`;
