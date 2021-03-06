import { memo } from "react";
import { useTooltipDispatch } from "./contexts/TooltipContext";
import Tooltip from "./Tooltip";

const Icons = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#ffffff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
};

const Action = () => {
  const setState = useTooltipDispatch();
  return (
    <div className="relative">
      <button
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        <Icons />
      </button>
      <Tooltip />
    </div>
  );
};

export default memo(Action);
