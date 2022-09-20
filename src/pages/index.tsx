import { useContext, useEffect } from "react";
import FixNavigation from "../components/FixNavigation";
import Loading from "../components/Loading";
import Main from "../components/Main";
import { NaviContext } from "../context/NaviContext";

export default function Home() {
  return (
    <>
      <Loading />
      <FixNavigation />
      <Main />
    </>
  );
}
