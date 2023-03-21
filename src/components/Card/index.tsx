import { Container } from "./styles";
import { ICharacterIMG } from "../../interface";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";

const Card = ({ thumbnail, id }: ICharacterIMG) => {
  const { listOneCharacter, listCharacterComics } =
    useContext(AuthMarvelContext);
  return (
    <Container>
      <img
        onClick={() => {
          listOneCharacter(id);
          listCharacterComics(id);
        }}
        id={id}
        src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
        alt=""
      />
    </Container>
  );
};

export default Card;
