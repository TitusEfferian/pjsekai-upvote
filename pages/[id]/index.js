import dynamic from "next/dynamic";
import { memo } from "react";

const LazyVideoDetail = dynamic(
  () => import("../../RouteComponents/VideoDetail"),
  {
    ssr: false,
  }
);

const VideoDetail = () => {
  return <LazyVideoDetail />;
};

export default memo(VideoDetail);
