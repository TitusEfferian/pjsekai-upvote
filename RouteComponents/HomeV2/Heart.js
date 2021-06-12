import { memo } from "react";
import "firebase/auth";
import { useAuth } from "reactfire";
import { useLoginBtsDispatch } from "./contexts/LoginBTS";
import { useCardIndex } from "./contexts/CardIndex";
import { useFirestore } from "reactfire";
import { useFirestoreCollectionData } from "reactfire";

const BorderHeart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#EF4444"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
    </svg>
  );
};

const FilledHeart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#EF4444"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

const Heart = () => {
  const { handleOnOpenBTS } = useLoginBtsDispatch();
  const auth = useAuth();
  const { index } = useCardIndex();
  const docsRef = useFirestore().collection("songs");
  const { data } = useFirestoreCollectionData(docsRef);
  const detailDocsRef = useFirestore()
    .collection("songs")
    .doc(data[index].NO_ID_FIELD);
  if (auth.currentUser === null) {
    return (
      <div className="flex items-center px-2 mt-2">
        <button
          className="mr-2"
          onClick={() => {
            handleOnOpenBTS();
          }}
        >
          <BorderHeart />
        </button>
        <p>{data[index].likes}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center px-2 mt-2">
      {!data[index].user_likes.includes(auth.currentUser.uid) && (
        <button
          className="mr-2"
          onClick={() => {
            let temp = data[index].user_likes;
            temp.push(auth.currentUser.uid);
            detailDocsRef.update({
              user_likes: temp,
              likes: temp.length,
            });
          }}
        >
          <BorderHeart />
        </button>
      )}
      {data[index].user_likes.includes(auth.currentUser.uid) && (
        <button
          className="mr-2"
          onClick={() => {
            detailDocsRef.update({
              user_likes: data[index].user_likes.filter(
                (x) => x != auth.currentUser.uid
              ),
              likes: data[index].user_likes.filter(
                (x) => x != auth.currentUser.uid
              ).length,
            });
          }}
        >
          <FilledHeart />
        </button>
      )}
      <p>{data[index].likes}</p>
    </div>
  );
};

export default memo(Heart);
