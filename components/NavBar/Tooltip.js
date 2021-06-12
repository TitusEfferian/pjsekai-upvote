import { memo, useEffect, useRef, useState } from "react";
import { useTooltip } from "./contexts/TooltipContext";

const Tooltip = () => {
  const showTooltip = useTooltip();

  return (
    <div
      className={`${
        showTooltip ? "opacity-100" : "opacity-0"
      } ${showTooltip ? 'visible' : 'invisible'} transition-all ease-in-out duration-300 p-4 w-48 bg-white rounded shadow border absolute top-0 right-0 mt-8`}
    >
      <ol>
        <li className="text-sm">
          <button>add your wishlist song</button>
        </li>
        <li className="text-sm mt-2">
          <button>Logout</button>
        </li>
      </ol>
    </div>
  );
};

export default memo(Tooltip);
