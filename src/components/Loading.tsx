import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { LoadingContext } from "../context/LoadingContext";
import style from "../../styles/Loading.module.scss";

const Loading: React.FC = () => {
  const [isLoaded] = useContext(LoadingContext);
  return (
    <div className={`${style.wrap} ${isLoaded ? "hidden" : ""}`}>
      <div className={style.wrap__cloud}>
        <Image
          width={1415}
          height={714}
          src={`/img/header/header_logo.png`}
          alt={`ロード中のロゴ`}
        />
      </div>
      <h2>Loading...</h2>
    </div>
  );
};
export default Loading;
