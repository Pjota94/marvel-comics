import { useContext, useEffect, useRef } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { Container } from "./styles";

const ImgCharacters = () => {
  const { character, setModalImgChar } = useContext(AuthMarvelContext);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setModalImgChar(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setModalImgChar]);
  return (
    <Container>
      <div ref={modalRef}>
        <img
          src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
          alt=""
        />
      </div>
    </Container>
  );
};

export default ImgCharacters;
