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
    <div className="w-full max-w-xl mt-16 h-80 bg-gray-300 mx-auto">
      <iframe
        style={{
          width: "100%",
          margin: "auto",
          height: 320,
        }}
        src={data.data().video_url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default memo(VideoPlayer);
