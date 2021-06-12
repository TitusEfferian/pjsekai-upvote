import { memo } from "react";
import { useAuth } from "reactfire";
import Action from "./Action";
const NavBar = ({ title, onBack, withAction }) => {
  const { currentUser } = useAuth();
  return (
    <nav className="w-full fixed top-0">
      <div className="w-full max-w-xl p-4 bg-blue-700 mx-auto shadow flex items-center justify-between">
        <div className="flex items-center">
          {onBack && (
            <button className="mr-4" onClick={onBack}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <rect fill="none" height="24" width="24" />
                <g>
                  <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
                </g>
              </svg>
            </button>
          )}
          <p className="text-md font-bold text-white line-clamp-1">{title}</p>
        </div>
        {withAction && currentUser && <Action />}
      </div>
    </nav>
  );
};

export default memo(NavBar);
