import { useRouter } from "next/router";
import { memo } from "react";
import "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import NavBar from "../../components/NavBar";

const VideoDetail = () => {
  const { back, query } = useRouter();
  const { id } = query;
  const docsRef = useFirestore()
    .collection("songs")
    .where("title", "==", id.toString());
  const data = useFirestoreCollectionData(docsRef);
  if (data.status === "loading") {
    return <NavBar title="" onBack={back} />;
  }
  if (data.data.length === 0) {
    return <p>not found</p>;
  }
  return <NavBar title={data.data[0].title} onBack={back} />;
};

export default memo(VideoDetail);
