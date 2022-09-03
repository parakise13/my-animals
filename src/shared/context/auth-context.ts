import { createContext } from "react";

export interface authProps {
  isLoggedIn: boolean;
  token: string | null;
  userId: string | Blob | null;
  login: (uid: string, token: string, expirationDate?: Date) => void;
  logout: () => void;
}

export const AuthContext = createContext<authProps>({
  isLoggedIn: false,
  token: null,
  userId: "",
  login: () => {},
  logout: () => {},
});
