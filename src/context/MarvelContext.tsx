import { createContext, useCallback, useState } from "react";
import {
  ICharacter,
  ICharacterIMG,
  IComic,
  IProviderPros,
  IValueProps,
} from "../interface";
import md5 from "md5";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

export const AuthMarvelContext = createContext<IValueProps>({} as IValueProps);

const MarvelContext = ({ children }: IProviderPros) => {
  const publicKey = "575803175a4b5535d5b8ceb1e37ab1df";
  const privateKey = "d7278bfc52d3c791d9f720883c8be59dfe7c0628";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [characters, setCharacters] = useState<ICharacterIMG[]>([]);
  const [comic, setComic] = useState<ICharacterIMG[]>([]);
  const [page, setPage] = useState(0);
  const [pageComic, setPageComic] = useState(0);
  const [nameSearch, setNameSearch] = useState("");
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const [oneComic, setOneComic] = useState<IComic[]>([]);
  const [modalImg, setModalImg] = useState(false);
  const [comicsCharacter, setComicsCharacter] = useState<ICharacterIMG[]>([]);
  const [modalImgChar, setModalImgChar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const listCharacter = useCallback(() => {
    if (nameSearch === "") {
      setLoading(true);
      api
        .get(
          `/v1/public/characters?limit=100&offset=${page}&ts=${time}&apikey=${publicKey}&hash=${hash}`
        )
        .then((res) => {
          setLoading(false);
          setCharacters(res.data.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      api
        .get(
          `/v1/public/characters?limit=100&nameStartsWith=${nameSearch}&ts=${time}&apikey=${publicKey}&hash=${hash}`
        )
        .then((res) => {
          setCharacters(res.data.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [page, nameSearch]);

  const listComic = useCallback(() => {
    setLoading2(true);
    api
      .get(
        `/v1/public/comics?limit=100&offset=${pageComic}&ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setLoading2(false);
        setComic(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, [pageComic]);

  const listOneCharacter = (id: string) => {
    api
      .get(
        `/v1/public/characters/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setCharacter(res.data.data.results);
        navigate("/character");
      })
      .catch((err) => console.log(err));
  };

  const listOneComic = (id: string) => {
    api
      .get(
        `/v1/public/comics/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setOneComic(res.data.data.results);
        navigate("/comic");
      })
      .catch((err) => console.log(err));
  };

  const listCharacterComics = (id: string) => {
    api
      .get(
        `/v1/public/characters/${id}/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setComicsCharacter(res.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthMarvelContext.Provider
      value={{
        isModal,
        setIsModal,
        listCharacter,
        characters,
        listComic,
        comic,
        page,
        setPage,
        setNameSearch,
        nameSearch,
        pageComic,
        setPageComic,
        character,
        setCharacter,
        listOneCharacter,
        oneComic,
        setOneComic,
        listOneComic,
        modalImg,
        setModalImg,
        listCharacterComics,
        comicsCharacter,
        modalImgChar,
        setModalImgChar,
        loading,
        loading2,
      }}
    >
      {children}
    </AuthMarvelContext.Provider>
  );
};

export default MarvelContext;
