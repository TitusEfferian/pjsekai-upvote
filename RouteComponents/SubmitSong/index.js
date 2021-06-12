import { useRouter } from "next/router";
import "firebase/firestore";
import { memo, useState } from "react";
import { useFirestore } from "reactfire";
import NavBar from "../../components/NavBar";

const SubmitSong = () => {
  const { back } = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [val, setVal] = useState("");
  const submitRef = useFirestore().collection("song_submit");
  return (
    <>
      <NavBar title="Submit wishlist song" onBack={back} />
      <div className="w-full max-w-xl mt-16 px-4 mx-auto">
        <input
          onChange={(e) => {
            const valTemp = e.target.value;
            setVal(valTemp);
          }}
          value={val}
          type="text"
          className="border border-black rounded p-2 w-full"
          placeholder="youtube url / nicovideo url"
        ></input>
      </div>
      <div className="w-full max-w-xl mx-auto px-4 mt-4">
        <button
          onClick={async () => {
            try {
              setSubmitLoading(true);
              await submitRef.add({
                url: val,
              });
              alert("success submit");
              setSubmitLoading(false);
              setVal("");
            } catch (err) {
              alert(err);
            }
          }}
          disabled={submitLoading}
          className="w-full rounded bg-black text-white flex items-center justify-center p-2"
        >
          {submitLoading ? "loading" : "submit"}
        </button>
      </div>
    </>
  );
};

export default memo(SubmitSong);
