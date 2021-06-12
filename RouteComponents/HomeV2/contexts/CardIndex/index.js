import { createContext, useContext } from "react";

const CardIndex = createContext();

const CardIndexProvider = ({ children, ...rest }) => {
  return <CardIndex.Provider value={rest}>{children}</CardIndex.Provider>;
};

const useCardIndex = () => useContext(CardIndex);
export { useCardIndex, CardIndexProvider };
