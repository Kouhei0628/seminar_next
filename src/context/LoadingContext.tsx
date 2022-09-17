import { createContext, Dispatch, SetStateAction, useState } from "react";

const LoadingContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

const LoadingProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={[isLoaded, setIsLoaded]}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
