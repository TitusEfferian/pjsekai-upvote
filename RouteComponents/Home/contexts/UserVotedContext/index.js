import { createContext, useContext, useState, useEffect } from "react";
import firebase from "../../../../firebase";
import "firebase/firestore";
import { useAuth } from "../../../../contexts/AuthContext";

const UserVoted = createContext();
const UserVotedDispatch = createContext();

const UserVotedProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const { isLoggedIn, user } = useAuth();
  useEffect(() => {
    const handleFetchUserVoted = async () => {
      const result = await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get();
      if (result.exists) {
        const data = result.data();
        /**
         * because gcp cloud shell linter is ruining opt chaining
         */
        const voted_song = Object.keys(data).includes("voted_song")
          ? data.voted_song
          : [];
        if (voted_song.length > 0) {
          setState([...voted_song]);
        }
      }
    };
    if (isLoggedIn) {
      handleFetchUserVoted();
    }
  }, [isLoggedIn, user.uid]);
  return (
    <UserVotedDispatch.Provider
      value={{
        updateUserVoted: (newId) => {
          if (state.length > 0) {
            setState((prev) => [...prev, newId]);
          } else {
            setState((prev) => [...prev, newId]);
          }
        },
      }}
    >
      <UserVoted.Provider value={state}>{children}</UserVoted.Provider>
    </UserVotedDispatch.Provider>
  );
};

const useUserVoted = () => useContext(UserVoted);
const useUserVotedDispatch = () => useContext(UserVotedDispatch);

export { UserVotedProvider, useUserVoted, useUserVotedDispatch };
