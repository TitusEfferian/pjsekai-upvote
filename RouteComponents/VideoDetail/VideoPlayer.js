import { useRouter } from "next/router";
import { memo } from "react";
import { useFirestoreDoc } from "reactfire";
import { useFirestore } from "reactfire";

const VideoPlayer = () => {
  const { query } = useRouter();
  const { id } = query;
  const docsRef = useFirestore().collection("songs").doc(id);
  const { data } = useFirestoreDoc(docsRef);

  return (
    <video className="mt-8 mx-auto" controls>
      <source src={data.data().video_url}></source>
    </video>
  );
};

export default memo(VideoPlayer);
