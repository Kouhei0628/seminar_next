import { useContext, useEffect } from "react";
import FixNavigation from "../components/FixNavigation";
import Loading from "../components/Loading";
import Main from "../components/Main";
import { NaviContext } from "../context/NaviContext";

export default function Home() {
  const [ref] = useContext(NaviContext);
  // ページ内スクロール
  useEffect(() => {
    const newElm: HTMLElement = document.getElementById(ref)!;
    if (!newElm) return;
    window.scrollTo({
      top: newElm.offsetTop,
      behavior: "smooth",
      left: 0,
    });
  }, [ref]);
  return (
    <>
      <Loading />
      <FixNavigation />
      <Main />
    </>
  );
}
