import FixNavigation from "../components/FixNavigation";
import HeadTag from "../components/HeadTag";
import Loading from "../components/Loading";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <HeadTag />
      <Loading />
      <FixNavigation />
      <Main />
    </>
  );
}
