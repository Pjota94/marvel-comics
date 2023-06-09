import { useContext } from "react";
import Capa from "../../components/Capa";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { Container } from "./styles";

const Home = () => {
  const { isModal } = useContext(AuthMarvelContext);
  return (
    <>
      <Container>
        <Header />
        <Capa />
      </Container>
      {isModal && <Menu />}
    </>
  );
};

export default Home;
