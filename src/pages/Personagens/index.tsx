import { Container, ContainerCards, Pagination } from "./styles";
import personagens from "../../assets/personagens.png";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const Personagens = () => {
  const {
    isModal,
    listCharacter,
    characters,
    page,
    setPage,
    nameSearch,
    setNameSearch,
  } = useContext(AuthMarvelContext);

  useEffect(() => {
    listCharacter();
  }, [nameSearch, page]);

  const paginationNext = () => {
    setPage(page + 100);
  };

  const paginationPrev = () => {
    setPage(page - 100);
  };

  return (
    <>
      <Container>
        <Header />
        <div className="name-logo">
          <p></p>
          <img src={personagens} alt="" />
          <div className="input-search">
            <BiSearch />
            <input
              value={nameSearch}
              onChange={(event) => setNameSearch(event.target.value)}
              type="text"
              placeholder="Buscar Heroi...Ex: Thor, Hulk"
            />
          </div>
        </div>
        <ContainerCards>
          {characters.map((hero, index) => (
            <Card key={hero.id} thumbnail={hero.thumbnail} id={hero.id} />
          ))}
        </ContainerCards>
        <Pagination>
          {page === 0 ? (
            <></>
          ) : (
            <button onClick={paginationPrev} className="prev">
              <MdArrowBackIos />
            </button>
          )}

          {page === 1500 ? (
            <></>
          ) : (
            <button onClick={paginationNext} className="next">
              <MdArrowForwardIos />
            </button>
          )}
        </Pagination>
      </Container>
      {isModal && <Menu />}
    </>
  );
};

export default Personagens;
