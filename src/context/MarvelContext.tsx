import { createContext, useState } from "react";
import { ICharacterIMG, IProviderPros, IValueProps } from "../interface";
import md5 from "md5";
import { api } from "../service/api";

export const AuthMarvelContext = createContext<IValueProps>({} as IValueProps);

const MarvelContext = ({ children }: IProviderPros) => {
  const publicKey = "575803175a4b5535d5b8ceb1e37ab1df";
  const privateKey = "d7278bfc52d3c791d9f720883c8be59dfe7c0628";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const [isModal, setIsModal] = useState(false);
  const [characters, setCharacters] = useState<ICharacterIMG[]>([]);
  const [comic, setComic] = useState<ICharacterIMG[]>([]);
  const [page, setPage] = useState(0);
  const [pageComic, setPageComic] = useState(0);
  const [nameSearch, setNameSearch] = useState("");

  const listCharacter = () => {
    if (nameSearch === "") {
      api
        .get(
          `/v1/public/characters?limit=100&offset=${page}&ts=${time}&apikey=${publicKey}&hash=${hash}`
        )
        .then((res) => setCharacters(res.data.data.results))
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
  };

  const listComic = () => {
    api
      .get(
        `/v1/public/comics?limit=100&offset=${pageComic}&ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => setComic(res.data.data.results))
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
      }}
    >
      {children}
    </AuthMarvelContext.Provider>
  );
};

export default MarvelContext;
