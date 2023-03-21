import { useContext } from "react";
import Header from "../../components/Header";
import ImgComic from "../../components/ImgComic";
import Menu from "../../components/Menu";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { Container, Content } from "./styles";

const Quadrinho = () => {
  const { isModal, oneComic, modalImg, setModalImg } =
    useContext(AuthMarvelContext);

  return (
    <>
      <Container>
        <Header />
        <h1>{oneComic[0].title}</h1>
        <Content>
          <div className="img">
            <img
              src={`${oneComic[0].thumbnail.path}.${oneComic[0].thumbnail.extension}`}
              alt=""
              onClick={() => setModalImg(true)}
            />
          </div>
          <div className="description">
            <h2>Description</h2>
            {oneComic[0].description === "" ? (
              <p>Without description</p>
            ) : (
              <p>{oneComic[0].description}</p>
            )}
          </div>
        </Content>
      </Container>
      {isModal && <Menu />}
      {modalImg && <ImgComic />}
    </>
  );
};

export default Quadrinho;
