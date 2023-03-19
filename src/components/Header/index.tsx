import { Container } from "./styles";
import { TfiMenu } from "react-icons/tfi";
import logo from "../../assets/Logo/logo.png";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { useContext } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { setIsModal } = useContext(AuthMarvelContext);
  const navigate = useNavigate();
  return (
    <Container>
      <button
        onClick={() => setIsModal(true)}
        className="animate__animated animate__flipInX"
      >
        {" "}
        <TfiMenu />
      </button>
      <img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/", { replace: true });
          setIsModal(false);
        }}
      />
      <p></p>
    </Container>
  );
};

export default Header;
