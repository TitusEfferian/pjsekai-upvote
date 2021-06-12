import "firebase/auth";
import { useRouter } from "next/router";
import { memo } from "react";
import { useAuth } from "reactfire";
import { useTooltip } from "./contexts/TooltipContext";

const Tooltip = () => {
  const showTooltip = useTooltip();
  const auth = useAuth();
  const { reload, push } = useRouter();
  return (
    <div
      className={`${showTooltip ? "opacity-100" : "opacity-0"} ${
        showTooltip ? "visible" : "invisible"
      } transition-all ease-in-out duration-300 p-4 w-48 bg-white rounded shadow border absolute top-0 right-0 mt-8`}
    >
      <ol>
        <li className="text-sm">
          <button
            onClick={() => {
              push("/submit/song");
            }}
          >
            add your wishlist song
          </button>
        </li>
        <li className="text-sm mt-2">
          <button
            onClick={() => {
              auth.signOut().then(() => {
                reload();
              });
            }}
          >
            Logout
          </button>
        </li>
      </ol>
    </div>
  );
};

export default memo(Tooltip);
