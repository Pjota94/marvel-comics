import game from "../../assets/game.png";
import Header from "../../components/Header";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";
import Menu from "../../components/Menu";
import { Container } from "./styles";

const Game = () => {
  const { isModal } = useContext(AuthMarvelContext);
  return (
    <>
      <Container>
        <Header />
        <div className="name-logo">
          <img src={game} alt="" />
        </div>
      </Container>
      {isModal && <Menu />}
    </>
  );
};

export default Game;
