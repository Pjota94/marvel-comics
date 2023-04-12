import { Container } from "./styles";
import home from "../../assets/Menu/home.png";
import characters from "../../assets/Menu/characters.png";
import comics from "../../assets/Menu/comics.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";

const MenuNames = () => {
  const navigate = useNavigate();
  const { setIsModal } = useContext(AuthMarvelContext);
  return (
    <Container>
      <img
        src={home}
        alt=""
        onClick={() => {
          navigate("/", { replace: true });
          setIsModal(false);
        }}
      />
      <img
        onClick={() => {
          navigate("/characters", { replace: true });
          setIsModal(false);
        }}
        src={characters}
        alt=""
      />
      <img
        src={comics}
        alt=""
        onClick={() => {
          navigate("/comics", { replace: true });
          setIsModal(false);
        }}
      />
    </Container>
  );
};

export default MenuNames;
