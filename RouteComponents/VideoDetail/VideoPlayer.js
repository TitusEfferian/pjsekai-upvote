import { useRouter } from "next/router";
import { memo } from "react";
import { useFirestoreCollectionData } from "reactfire";
import { useFirestore } from "reactfire";

const VideoPlayer = () => {
  const { query } = useRouter();
  const { id } = query;
  const docsRef = useFirestore()
    .collection("songs")
    .where("title", "==", id.toString());
  const data = useFirestoreCollectionData(docsRef);
  console.log(data.data[0].video_url);
  return (
    <video className="mt-8 mx-auto" controls>
      <source src={data.data[0].video_url}></source>
    </video>
  );
};

export default memo(VideoPlayer);
