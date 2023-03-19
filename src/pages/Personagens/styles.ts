import styled from "styled-components";

export const Container = styled.div`
  .name-logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .name-logo > p {
    margin-right: 302px;
  }

  .input-search {
    width: 286px;
    height: 57px;
    border: 4px solid #ffffff;
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .input-search > svg {
    color: #ffffff;
    font-size: 25px;
    margin-left: 9px;
  }

  input {
    background-color: transparent;
    border: none;
    width: 220px;
    color: #ffffff;
    font-size: 16px;
    margin-left: 8px;
  }

  input::placeholder {
    font-size: 16px;
  }

  .name-logo > img {
    margin-left: 33px;
    margin-top: 15px;
  }

  @media (max-width: 1033px) {
    .name-logo > p {
      display: none;
    }

    .name-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .input-search {
      margin-top: 30px;
      margin-left: 28px;
    }
  }
`;

export const ContainerCards = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 43px;
  margin-bottom: 50px;

  @media (max-width: 1033px) {
    margin-top: 40px;
  }

  @media (max-width: 1316px) {
    gap: 30px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  button {
    border: none;
    background-color: transparent;
    font-size: 40px;
    color: white;
  }
`;
