import Image from "next/image";
import { useContext } from "react";
import style from "../../styles/Loading.module.scss";
import { LoadingContext } from "../context/LoadingContext";

const Loading: React.FC = () => {
  const [isLoaded] = useContext(LoadingContext);
  return (
    <div className={`${style.wrap} ${isLoaded ? style.hidden : ""}`}>
      <div className={style.wrap__cloud}>
        <Image
          className={style.wrap__cloud__img}
          layout='fill'
          src={`/img/header/header_logo.png`}
          alt={`ロード中のロゴ`}
          priority
        />
      </div>
      <h2 className={style.loading}>
        Loading<span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h2>
    </div>
  );
};
export default Loading;
