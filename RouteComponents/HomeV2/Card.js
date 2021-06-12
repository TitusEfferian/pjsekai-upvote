import { memo } from "react";
import { useFirestoreCollectionData } from "reactfire";
import { useFirestore } from "reactfire";
import BottomSheet from "../../components/BottomSheet";
import { useCardIndex } from "./contexts/CardIndex";
import { useLoginBts, useLoginBtsDispatch } from "./contexts/LoginBTS";
import Heart from "./Heart";
import LoginAs from "./LoginAs";

const Card = () => {
  const { index } = useCardIndex();
  const { showBTS } = useLoginBts();
  const { handleOnCloseBTS } = useLoginBtsDispatch();
  const docsRef = useFirestore().collection("songs");
  const { data } = useFirestoreCollectionData(docsRef);
  return (
    <div className="px-4 mx-auto w-full max-w-xl mt-16">
      <div className="w-full shadow rounded">
        <img src={data[index].thumbnail} className="rounded-t mx-auto" />
        <div className="px-2 mt-2">
          <p className="font-bold">{data[index].title}</p>
        </div>
        <div className="px-2 mt-1">
          <p className="text-sm">{data[index].creator}</p>
        </div>
        <Heart />
        <BottomSheet
          show={showBTS}
          title="Choose your account"
          onClose={handleOnCloseBTS}
        >
          {showBTS && <LoginAs />}
        </BottomSheet>
      </div>
    </div>
  );
};

export default memo(Card);
