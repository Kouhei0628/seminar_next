import { useContext, useEffect } from "react";
import FixNavigation from "../components/FixNavigation";
import HeadTag from "../components/HeadTag";
import Loading from "../components/Loading";
import Main from "../components/Main";
import { NaviContext } from "../context/NaviContext";

export default function Home() {
  const [ref] = useContext(NaviContext);
  // ページ内スクロール
  useEffect(() => {
    const newElm: HTMLElement = document.getElementById(ref)!;
    if (!newElm) return;
    const time: number = window.setTimeout(() => {
      window.scrollTo({
        top: newElm.offsetTop,
        behavior: "smooth",
        left: 0,
      });
    }, 1);
    return () => window.clearTimeout(time);
  }, [ref]);
  return (
    <>
      <HeadTag />
      <Loading />
      <FixNavigation />
      <Main />
    </>
  );
}
