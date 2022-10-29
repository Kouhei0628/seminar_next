import { createContext, useEffect, useState } from "react";

const RestContext = createContext<[{ [key: string]: string }, boolean]>([
  {},
  false,
]);
const RestProvider = ({ children }) => {
  const [time, setTime] = useState<{ [key: string]: string }>();
  const [differ, setDiffer] = useState<boolean>(false);

  const handleDeadline = (y: number, mon: number, d: number, min: number) => {
    const deadline: Date = new Date(y, mon - 1, d, min);
    const now: Date = new Date();
    const diff: number = deadline.getTime() - now.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    const hour = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).toString();
    const minute = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    ).toString();
    setTime({ d: day, h: hour, m: minute });
    setDiffer(diff < 0);
  };

  useEffect(() => {
    if (!time) handleDeadline(2022, 10, 17, 0);
    const timer = window.setInterval(() => {
      handleDeadline(2022, 10, 17, 0);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [time]);

  return (
    <RestContext.Provider value={[time, differ]}>
      {children}
    </RestContext.Provider>
  );
};
export { RestContext, RestProvider };
