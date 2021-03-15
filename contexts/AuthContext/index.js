import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "../../firebase";
import "firebase/auth";

const AuthContext = createContext();
const AuthDispatch = createContext();

const useFunc = () => {
  return {
    handleLogOut: (setState) => {
      setState({
        isLoggedIn: false,
        isFetched: false,
        loading: true,
        user: {
          displayName: "",
          uid: "",
        },
      });
    },
  };
};

const AuthProvider = ({ children }) => {
  const { handleLogOut } = useFunc();
  const [state, setState] = useState({
    isLoggedIn: false,
    isFetched: false,
    loading: true,
    user: {
      displayName: "",
      uid: "",
    },
  });
  useEffect(() => {
    if (!state.isFetched) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          setState((prev) => {
            return {
              ...prev,
              isLoggedIn: true,
              isFetched: true,
              loading: false,
              user: {
                displayName: user.displayName,
                uid: user.uid,
              },
            };
          });
        } else {
          // No user is signed in.
          setState((prev) => {
            return {
              ...prev,
              loading: false,
              isFetched: true,
            };
          });
        }
      });
    }
  }, [state.isFetched]);
  return (
    <AuthDispatch.Provider
      value={() => {
        handleLogOut(setState);
      }}
    >
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </AuthDispatch.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
const useAuthDispatch = () => useContext(AuthDispatch);

export { useAuth, AuthProvider, useAuthDispatch };
