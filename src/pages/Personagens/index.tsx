import { Container, ContainerCards, Pagination } from "./styles";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import vai from "../../assets/vai.png";
import Loading from "../../components/Loading";

const Personagens = () => {
  const {
    isModal,
    listCharacter,
    characters,
    page,
    setPage,
    nameSearch,
    setNameSearch,
    loading,
  } = useContext(AuthMarvelContext);

  useEffect(() => {
    listCharacter();
  }, [listCharacter]);

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
          <img src={vai} alt="" />
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
        {loading && <Loading />}
        {!loading && (
          <ContainerCards>
            {characters.map((hero, index) => (
              <Card key={hero.id} thumbnail={hero.thumbnail} id={hero.id} />
            ))}
          </ContainerCards>
        )}
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
