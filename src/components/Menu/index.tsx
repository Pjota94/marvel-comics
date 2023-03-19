import MenuNames from "../MenuNames";
import { Container } from "./styles";
import "animate.css";
import { TfiClose } from "react-icons/tfi";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";

const Menu = () => {
  const { setIsModal } = useContext(AuthMarvelContext);

  return (
    <Container className="animate__animated animate__fadeIn">
      <button onClick={() => setIsModal(false)}>
        <TfiClose />
      </button>
      <MenuNames />
    </Container>
  );
};

export default Menu;
