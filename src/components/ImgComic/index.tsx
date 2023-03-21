import { useContext, useEffect, useRef } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";
import { Container } from "./styles";

const ImgComic = () => {
  const { oneComic, setModalImg } = useContext(AuthMarvelContext);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setModalImg(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setModalImg]);
  return (
    <Container>
      <div ref={modalRef}>
        <img
          src={`${oneComic[0].thumbnail.path}.${oneComic[0].thumbnail.extension}`}
          alt=""
        />
      </div>
    </Container>
  );
};

export default ImgComic;
