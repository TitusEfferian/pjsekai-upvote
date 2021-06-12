import { createContext, useContext, useState } from "react";

const LoginBts = createContext();
const LoginBtsDispatch = createContext();

const LoginBtsProvider = ({ children }) => {
  const [{ showBTS }, setState] = useState({
    showBTS: false,
  });
  return (
    <LoginBtsDispatch.Provider
      value={{
        handleOnCloseBTS: () => {
          setState((prev) => {
            return {
              ...prev,
              showBTS: false,
            };
          });
        },
        handleOnOpenBTS: () => {
          setState((prev) => {
            return {
              ...prev,
              showBTS: true,
            };
          });
        },
      }}
    >
      <LoginBts.Provider value={{ showBTS }}>{children}</LoginBts.Provider>
    </LoginBtsDispatch.Provider>
  );
};

const useLoginBts = () => useContext(LoginBts);
const useLoginBtsDispatch = () => useContext(LoginBtsDispatch);

export { useLoginBts, useLoginBtsDispatch, LoginBtsProvider };
