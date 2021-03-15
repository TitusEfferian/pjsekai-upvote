import { useAuth } from "../../../../contexts/AuthContext";
import firebase from "../../../../firebase";
import "firebase/firestore";
import { useUserVotedDispatch } from "../../contexts/UserVotedContext";
import { useHomeDispatch } from "../../../../contexts/HomeContext";
import { useLoginBtsDispatch } from "../../contexts/LoginBtsContext";

const useLikes = () => {
  const { isLoggedIn, user } = useAuth();
  const { updateUserVoted } = useUserVotedDispatch();
  const { updateLikesCount } = useHomeDispatch();
  const { handleOnOpenBTS } = useLoginBtsDispatch();

  return {
    handleOnClick: async ({ id }) => {
      if (isLoggedIn) {
        try {
          await firebase.firestore().runTransaction((transaction) => {
            return transaction
              .get(firebase.firestore().collection("users").doc(user.uid))
              .then((userDocs) => {
                if (userDocs.exists) {
                  const data = userDocs.data();
                  const voted_song = Object.keys(data).includes("voted_song")
                    ? data.voted_song
                    : [];
                  if (!voted_song.includes(id)) {
                    transaction.update(
                      firebase.firestore().collection("users").doc(user.uid),
                      {
                        voted_song: [...voted_song, id],
                      }
                    );
                    updateUserVoted(id);
                  }
                } else {
                  transaction.set(
                    firebase.firestore().collection("users").doc(user.uid),
                    {
                      voted_song: [id],
                    }
                  );
                  updateUserVoted(id);
                }
              });
          });
          await firebase.firestore().runTransaction((transaction) => {
            return transaction
              .get(firebase.firestore().collection("songs").doc(id))
              .then((songDocs) => {
                const data = songDocs.data();
                const likes = data.likes;
                transaction.update(
                  firebase.firestore().collection("songs").doc(id),
                  {
                    likes: likes + 1,
                  }
                );
              })
              .then(() => {
                updateLikesCount({ id });
              });
          });
        } catch (err) {
          console.log(err);
          alert(err);
        }
      } else {
        handleOnOpenBTS();
      }
    },
  };
};

export default useLikes;
