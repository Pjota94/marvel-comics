import { useContext } from "react";
import CardSlider from "../../components/CardSlider";
import Header from "../../components/Header";
import ImgCharacters from "../../components/ImgCharacters";
import Menu from "../../components/Menu";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { Container, Content } from "./styles";

const Personagem = () => {
  const { isModal, character, modalImgChar, setModalImgChar } =
    useContext(AuthMarvelContext);
  return (
    <>
      <Container>
        <Header />
        <h1>{character[0].name}</h1>
        <Content>
          <div className="img">
            <img
              src={`${character[0].thumbnail.path}/standard_fantastic.${character[0].thumbnail.extension}`}
              alt=""
              onClick={() => setModalImgChar(true)}
            />
          </div>
          <div className="description">
            <h2>Description</h2>
            {character[0].description === "" ? (
              <p>Without description</p>
            ) : (
              <p>{character[0].description}</p>
            )}
          </div>
        </Content>
        <CardSlider />
      </Container>
      {isModal && <Menu />}
      {modalImgChar && <ImgCharacters />}
    </>
  );
};

export default Personagem;
