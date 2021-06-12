import { useRouter } from "next/router";
import { memo } from "react";
import Head from 'next/head';
import "firebase/firestore";
import { useFirestore } from "reactfire";
import NavBar from "../../components/NavBar";
import VideoPlayer from "./VideoPlayer";
import { useFirestoreDoc } from "reactfire";

const VideoDetail = () => {
  const { back, query } = useRouter();
  const { id } = query;
  const docsRef = useFirestore().collection("songs").doc(id);
  const { data, status } = useFirestoreDoc(docsRef);
  if (status === "loading") {
    return <NavBar title="" onBack={back} />;
  }
  if (!data.exists) {
    return <p>not found</p>;
  }

  return (
    <>
      <NavBar title={data.data().title} onBack={back} />
      <Head>
          <title>{`Project Sekai Wishlist song - ${data.data().title}`}</title>
      </Head>
      <VideoPlayer />
    </>
  );
};

export default memo(VideoDetail);
