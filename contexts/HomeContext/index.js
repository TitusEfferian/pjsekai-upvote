import { createContext, useContext, useState } from "react";

const HomeContext = createContext();
const HomeDispatchContext = createContext();

const HomeProvider = ({ children, data }) => {
  const [state, setState] = useState(data);
  return (
    <HomeDispatchContext.Provider
      value={{
        updateLikesCount: ({ id }) => {
          setState([
            ...state.map((x) => {
              if (x.id === id) {
                console.log(x);
                return {
                  ...x,
                  likes: x.likes + 1,
                };
              }
              return x;
            }),
          ]);
        },
      }}
    >
      <HomeContext.Provider value={state}>{children}</HomeContext.Provider>
    </HomeDispatchContext.Provider>
  );
};

const useHome = () => useContext(HomeContext);
const useHomeDispatch = () => useContext(HomeDispatchContext);

export { HomeProvider, useHome, useHomeDispatch };
