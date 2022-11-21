import { createContext, useEffect, useState } from "react";

type Time = { day: string; hour: string; minute: string; isPassed: boolean };

const initTime = { day: "", hour: "", minute: "", isPassed: false };

const RestContext = createContext<Time>(initTime);

const RestProvider = ({ children }) => {
  const [time, setTime] = useState<Time>(initTime);

  const deadline = { y: 2022, mon: 10, d: 17, min: 0 };

  const handleDeadline = ({ y, mon, d, min }: typeof deadline) => {
    const _deadline: Date = new Date(y, mon - 1, d, min);
    const now: Date = new Date();
    const diff: number = _deadline.getTime() - now.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    const hour = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).toString();
    const minute = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    ).toString();
    const isPassed = diff < 0;
    setTime({ day, hour, minute, isPassed });
  };

  useEffect(() => {
    if (!time) handleDeadline(deadline);
    const timer = window.setInterval(() => handleDeadline(deadline), 1000);
    return () => window.clearInterval(timer);
  }, [time]);

  return <RestContext.Provider value={time}>{children}</RestContext.Provider>;
};
export { RestContext, RestProvider };
