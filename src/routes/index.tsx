import { Route, Routes } from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import Personagens from "../pages/Personagens";
import Quadrinhos from "../pages/Quadrinhos";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personagens" element={<Personagens />} />
      <Route path="/quadrinhos" element={<Quadrinhos />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default RoutesMain;
