import { memo } from "react";
import firebase from "firebase/app";
import { useAuth } from "reactfire";
import { useLoginBtsDispatch } from "../contexts/LoginBTS";
import { useRouter } from "next/router";

const useLogin = () => {
  const { handleOnCloseBTS } = useLoginBtsDispatch();
  const auth = useAuth();
  const { reload } = useRouter();
  return {
    handleGoogle: async () => {
      try {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        handleOnCloseBTS();
        reload();
      } catch (err) {
        alert(err);
      }
    },
    handleApple: async () => {
      try {
        await auth.signInWithPopup(
          new firebase.auth.OAuthProvider("apple.com")
        );
        handleOnCloseBTS();
        reload();
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
