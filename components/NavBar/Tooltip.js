import { memo } from "react";

const Tooltip = () => {
  return (
    <div className="duration-300 transition ease-in-out p-4 w-48 bg-white rounded shadow border absolute top-0 right-0 mt-8">
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
