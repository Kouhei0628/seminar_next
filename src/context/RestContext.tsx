import { createContext, useEffect, useState } from "react";

const RestContext = createContext<[string, boolean]>(["", false]);
const RestProvider = ({ children }) => {
  const [time, setTime] = useState<string>("");
  const [differ, setDiffer] = useState<boolean>(false);
  useEffect(() => {
    // 初回レンダリング時の時刻を表示
    const deadline: Date = new Date(2022, 10 - 1, 17, 0);
    const now: Date = new Date();
    const diff: number = deadline.getTime() - now.getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (!time) {
      setTime(` ${d} 日 ${h} 時間 ${m} 分`);
      setDiffer(diff < 0);
    }
    const timer = window.setInterval(() => {
      const _deadline: Date = new Date(2022, 10 - 1, 17, 0);
      const _now: Date = new Date();
      const _diff: number = _deadline.getTime() - _now.getTime();
      const _d = Math.floor(_diff / (1000 * 60 * 60 * 24));
      const _h = Math.floor((_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const _m = Math.floor((_diff % (1000 * 60 * 60)) / (1000 * 60));
      setTime(` ${_d} 日 ${_h} 時間 ${_m} 分`);
      setDiffer(_diff < 0);
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
