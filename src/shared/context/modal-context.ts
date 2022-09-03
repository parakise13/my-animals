import { createContext } from "react";

export const ModalContext = createContext({
  isModalOpened: false,
  closeModal: () => {},
  openModal: () => {},
});
