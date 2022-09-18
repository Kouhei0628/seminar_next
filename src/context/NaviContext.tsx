import { createContext, Dispatch, SetStateAction, useState } from "react";

const NaviContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  "",
  () => {},
]);

const NaviProvider = ({ children }) => {
  const [ref, setRef] = useState<string>("");
  return (
    <NaviContext.Provider value={[ref, setRef]}>
      {children}
    </NaviContext.Provider>
  );
};

export { NaviContext, NaviProvider };
