import { Route, Routes } from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import Personagem from "../pages/Personagem";
import Personagens from "../pages/Personagens";
import Quadrinho from "../pages/Quadrinho";
import Quadrinhos from "../pages/Quadrinhos";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Personagens />} />
      <Route path="/comics" element={<Quadrinhos />} />
      <Route path="/game" element={<Game />} />
      <Route path="/character" element={<Personagem />} />
      <Route path="/comic" element={<Quadrinho />} />
    </Routes>
  );
};

export default RoutesMain;
