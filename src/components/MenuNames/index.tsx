import { Container } from "./styles";
import inicio from "../../assets/Menu/inicio.png";
import personagens from "../../assets/Menu/personagens.png";
import quadrinhos from "../../assets/Menu/quadrinhos.png";
import game from "../../assets/Menu/game.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";

const MenuNames = () => {
  const navigate = useNavigate();
  const { setIsModal } = useContext(AuthMarvelContext);
  return (
    <Container>
      <img
        src={inicio}
        alt=""
        onClick={() => {
          navigate("/", { replace: true });
          setIsModal(false);
        }}
      />
      <img
        onClick={() => {
          navigate("/personagens", { replace: true });
          setIsModal(false);
        }}
        src={personagens}
        alt=""
      />
      <img
        src={quadrinhos}
        alt=""
        onClick={() => {
          navigate("/quadrinhos", { replace: true });
          setIsModal(false);
        }}
      />
      <img
        src={game}
        alt=""
        onClick={() => {
          navigate("/game", { replace: true });
          setIsModal(false);
        }}
      />
    </Container>
  );
};

export default MenuNames;
