import { Container } from "./styles";
import { ICharacterIMG } from "../../interface";

const CardComic = ({ thumbnail, id }: ICharacterIMG) => {
  return (
    <Container>
      <img
        id={id}
        src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
        alt=""
      />
    </Container>
  );
};

export default CardComic;
