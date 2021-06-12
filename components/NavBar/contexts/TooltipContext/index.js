import { createContext, useContext, useState } from "react";

const Tooltip = createContext();
const TooltipDispatch = createContext();

const TooltipProvider = ({ children }) => {
  const [state, setState] = useState(false);
  return (
    <TooltipDispatch.Provider value={setState}>
      <Tooltip.Provider value={state}>{children}</Tooltip.Provider>
    </TooltipDispatch.Provider>
  );
};

const useTooltip = () => useContext(Tooltip);
const useTooltipDispatch = () => useContext(TooltipDispatch);

export { useTooltip, useTooltipDispatch, TooltipProvider };
