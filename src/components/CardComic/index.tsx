import { Container } from "./styles";
import { ICharacterIMG } from "../../interface";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";

const CardComic = ({ thumbnail, id }: ICharacterIMG) => {
  const { listOneComic } = useContext(AuthMarvelContext);
  return (
    <Container>
      <img
        onClick={() => listOneComic(id)}
        id={id}
        src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
        alt=""
      />
    </Container>
  );
};

export default CardComic;
