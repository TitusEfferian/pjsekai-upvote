import { memo } from "react";
const NavBar = ({ title }) => {
  return (
    <nav className="w-full fixed top-0">
      <div className="w-full max-w-xl p-4 bg-blue-700 mx-auto shadow">
        <p className="text-lg font-bold text-white">{title}</p>
      </div>
    </nav>
  );
};

export default memo(NavBar);
