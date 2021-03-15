import { memo } from "react";
import firebase from "../../../firebase";
import "firebase/auth";
import { useLoginBtsDispatch } from "../contexts/LoginBtsContext";

const provider = new firebase.auth.GoogleAuthProvider();
const appleProvider = new firebase.auth.OAuthProvider("apple.com");

const useLogin = () => {
  const { handleOnCloseBTS } = useLoginBtsDispatch();
  return {
    handleGoogle: async () => {
      try {
        await firebase.auth().signInWithPopup(provider);
        handleOnCloseBTS();
      } catch (err) {
        alert(err);
      }
    },
    handleApple: async () => {
      try {
        await firebase.auth().signInWithPopup(appleProvider);
        handleOnCloseBTS();
      } catch (err) {
        alert(err);
      }
    },
  };
};

const LoginAs = () => {
  const { handleGoogle, handleApple } = useLogin();
  return (
    <>
      <button
        onClick={handleApple}
        className="w-full mt-4 flex items-center justify-center flex bg-black rounded shadow text-white p-2"
      >
        <p>Vote with apple</p>
      </button>
      <button
        onClick={handleGoogle}
        className="w-full mt-4 flex items-center justify-center flex border border-black shadow p-2 rounded"
      >
        <p>Vote with google</p>
      </button>
    </>
  );
};

export default memo(LoginAs);
