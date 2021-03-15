import { memo, useMemo } from "react";

const BottomSheet = ({ title, children, show, onClose }) => {
  const renderCss = useMemo(() => {
    if (show) {
      return "fixed z-10 inset-x-0 bottom-0 max-w-xl bg-white mx-auto rounded-t-2xl shadow border border-gray-300 p-4 transition-all ease-in-out duration-300";
    }
    return "fixed inset-x-0 bottom-0 max-w-xl bg-white mx-auto rounded-t-2xl shadow border border-gray-300 p-4 transition-all ease-in-out duration-200 transform translate-y-full";
  }, [show]);
  const renderCssOverlay = useMemo(() => {
    if (show) {
      return "fixed inset-0 bg-black opacity-50 z-0";
    }
    return "";
  }, [show]);
  return (
    <>
      {show && <div onClick={onClose} className={renderCssOverlay}></div>}
      <div className={renderCss}>
        <div className="w-full flex items-center">
          <button
            onClick={onClose}
            className="focus:outline-none flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <p className="ml-4 font-bold text-xl">{title}</p>
        </div>
        {children}
      </div>
    </>
  );
};
export default memo(BottomSheet);
