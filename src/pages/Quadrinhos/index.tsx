import quadrinhos from "../../assets/quadrinhos.png";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import { ContainerCards, Pagination } from "../Personagens/styles";
import CardComic from "../../components/CardComic";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import comics from "../../assets/comics.png";

const Quadrinhos = () => {
  const { isModal, listComic, comic, pageComic, setPageComic } =
    useContext(AuthMarvelContext);

  useEffect(() => {
    listComic();
  }, [pageComic]);

  const paginationNext = () => {
    setPageComic(pageComic + 100);
  };

  const paginationPrev = () => {
    setPageComic(pageComic - 100);
  };

  return (
    <>
      <Container>
        <Header />
        <div className="name-logo">
          <img src={comics} alt="" />
        </div>
      </Container>
      <ContainerCards>
        {comic.map((comic) => (
          <CardComic key={comic.id} thumbnail={comic.thumbnail} id={comic.id} />
        ))}
      </ContainerCards>
      <Pagination>
        {pageComic === 0 ? (
          <></>
        ) : (
          <button onClick={paginationPrev} className="prev">
            <MdArrowBackIos />
          </button>
        )}

        {pageComic === 1500 ? (
          <></>
        ) : (
          <button onClick={paginationNext} className="next">
            <MdArrowForwardIos />
          </button>
        )}
      </Pagination>
      {isModal && <Menu />}
    </>
  );
};

export default Quadrinhos;
