import dynamic from "next/dynamic";
import { memo } from "react";

const LazySubmitSong = dynamic(() =>
  import("../../../RouteComponents/SubmitSong")
);

const SubmitSong = () => {
  return <LazySubmitSong />;
};

export default memo(SubmitSong);
