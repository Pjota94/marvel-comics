import { useContext } from "react";
import CardSlider from "../../components/CardSlider";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { Container, Content } from "./styles";

const Personagem = () => {
  const { isModal, character } = useContext(AuthMarvelContext);
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
            />
          </div>
          <div className="description">
            <h2>Descrição</h2>
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
    </>
  );
};

export default Personagem;
