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
