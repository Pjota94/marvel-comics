import { Container } from "./styles";
import img from "../../assets/loading.png";

const Loading = () => {
  return (
    <Container>
      <img src={img} alt="" />
    </Container>
  );
};

export default Loading;
