import { createContext } from "react";
import { IProviderPros, IValueProps } from "../interface";

export const AuthMarvelContext = createContext<IValueProps>({} as IValueProps);

const MarvelContext = ({ children }: IProviderPros) => {
  return (
    <AuthMarvelContext.Provider value={{}}>
      {children}
    </AuthMarvelContext.Provider>
  );
};

export default MarvelContext;
