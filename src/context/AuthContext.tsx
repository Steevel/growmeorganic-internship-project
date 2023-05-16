import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Auth {
  isUser: boolean;
  setIsUser: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Auth>({
  isUser: false,
  setIsUser: () => {
    /**/
  },
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isUser, setIsUser] = useState(false);
  return (
    <AuthContext.Provider value={{ isUser, setIsUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
