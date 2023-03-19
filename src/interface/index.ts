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
}

export interface IProviderPros {
  children: ReactNode;
}

export interface ICharacterIMG {
  thumbnail: ITumbnail;
  id: string;
}

export interface ITumbnail {
  extension: string;
  path: string;
}
