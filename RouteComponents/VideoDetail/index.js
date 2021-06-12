import { useRouter } from "next/router";
import { memo } from "react";
import "firebase/firestore";
import { useFirestore } from "reactfire";
import NavBar from "../../components/NavBar";
import VideoPlayer from "./VideoPlayer";
import { useFirestoreDoc } from "reactfire";

const VideoDetail = () => {
  const { back, query } = useRouter();
  const { id } = query;
  const docsRef = useFirestore().collection("songs").doc(id);
  const data = useFirestoreDoc(docsRef);
  if (data.status === "loading") {
    return <NavBar title="" onBack={back} />;
  }
  if (data.data.length === 0) {
    return <p>not found</p>;
  }
  return (
    <>
      <NavBar title={data.data.title} onBack={back} />;
      <VideoPlayer />
    </>
  );
};

export default memo(VideoDetail);
