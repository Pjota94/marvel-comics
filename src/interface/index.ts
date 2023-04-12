import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IValueProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  listCharacter: () => void;
  listComic: () => void;
  characters: ICharacterIMG[];
  comic: ICharacterIMG[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setNameSearch: Dispatch<SetStateAction<string>>;
  nameSearch: string;
  pageComic: number;
  setPageComic: Dispatch<SetStateAction<number>>;
  character: ICharacter[];
  setCharacter: Dispatch<SetStateAction<ICharacter[]>>;
  listOneCharacter: (id: string) => void;
  oneComic: IComic[];
  setOneComic: Dispatch<SetStateAction<IComic[]>>;
  listOneComic: (id: string) => void;
  modalImg: boolean;
  setModalImg: Dispatch<SetStateAction<boolean>>;
  listCharacterComics: (id: string) => void;
  comicsCharacter: ICharacterIMG[];
  modalImgChar: boolean;
  setModalImgChar: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  loading2: boolean;
}

export interface IProviderPros {
  children: ReactNode;
}

export interface ICharacterIMG {
  thumbnail: ITumbnail;
  id: string;
}

export interface ICharacter {
  name: string;
  description: string;
  thumbnail: ITumbnail;
}

export interface ITumbnail {
  extension: string;
  path: string;
}

export interface IComic {
  title: string;
  description: string;
  thumbnail: ITumbnail;
}
