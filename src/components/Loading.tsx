import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { LoadingContext } from "../context/LoadingContext";
import style from "../../styles/Loading.module.scss";

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
