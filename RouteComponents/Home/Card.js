import { memo, createContext, useContext } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useHome } from "../../contexts/HomeContext";
import useLikes from "./hooks/useLikes";
import BottomSheet from "../../components/BottomSheet";
import { useUserVoted } from "./contexts/UserVotedContext";
import {
  LogiBtsProvider,
  useLoginBts,
  useLoginBtsDispatch,
} from "./contexts/LoginBtsContext";

const LoginAs = dynamic(() => import("./LoginAs"));

const CardContext = createContext();
const useCard = () => useContext(CardContext);

const ImageThumbnail = () => {
  const {} = useRouter;
  const { thumbnail } = useCard();
  return (
    <img src={thumbnail} className="mx-auto cursor-pointer" loading="lazy" />
  );
};

const ThumbUp = () => {
  const { likes } = useCard();

  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="18px"
        height="18px"
        className="cursor-pointer"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
      </svg>
      <p className="ml-4">{likes}</p>
    </div>
  );
};

const VoteButton = () => {
  const { id } = useCard();
  const user_voted = useUserVoted();
  const { handleOnClick } = useLikes();
  const { handleOnCloseBTS } = useLoginBtsDispatch();
  const { showBTS } = useLoginBts();
  if (user_voted.includes(id)) {
    return <p className="text-bold text-gray-500 text-lg">voted</p>;
  }
  return (
    <>
      <button
        onClick={() => {
          handleOnClick({ id });
        }}
        className="w-32 py-2 rounded shadow bg-blue-700 text-white focus:outline-none"
      >
        vote
      </button>
      <BottomSheet
        show={showBTS}
        title="Choose your account"
        onClose={handleOnCloseBTS}
      >
        {showBTS && <LoginAs />}
      </BottomSheet>
    </>
  );
};

const Card = () => {
  const data = useHome();
  return data.map((x, y) => {
    return (
      <ul
        key={y}
        className={`w-full max-w-xl ${
          y === 0 ? "mt-20" : "mt-4"
        } pl-4 pr-4 mx-auto`}
      >
        <Link href={`/${x.title}`}>
          <li className="w-full max-w-xl bg-white rounded shadow">
            <CardContext.Provider value={x}>
              <ImageThumbnail thumbnail={x.thumbnail} />
              <div className="p-4">
                <p className="text-lg font-bold">{x.title}</p>
                <p className="text-md text-gray-700">{x.creator}</p>
                <div className="w-full flex items-center justify-between mt-4">
                  <LogiBtsProvider>
                    <ThumbUp />
                    <VoteButton />
                  </LogiBtsProvider>
                </div>
              </div>
            </CardContext.Provider>
          </li>
        </Link>
      </ul>
    );
  });
};

export default memo(Card);
