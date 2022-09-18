import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import CloudPicture from "./CloudPicture";
import LogoAndCopy from "./LogoAndCopy";
import style from "../../styles/Header.module.scss";

const Header: React.FC = React.memo(() => {
  const [isLoaded, setIsLoaded] = useContext(LoadingContext);
  return (
    <header className={style.header}>
      <div className={style.header_wrap} onLoad={() => setIsLoaded(true)}>
        <div className={style.toptopCloud}></div>
        <div className={style.provVisual}>
          <Image
            width={3600}
            height={1800}
            className={`${isLoaded ? "visible" : ""}`}
            src={`/img/header/header_main.png?ver=1.0.2`}
            alt='メインヴィジュアル'
          />
        </div>
        <div className={style.cloudWrap}>
          <div className={style.cloudWrap__top} />
          <div className={style.headerCloud}>
            <CloudPicture />
            <LogoAndCopy />
          </div>
          <div className={style.cloudWrap__bottom} />
        </div>
        <div className={style.headerVisual}>
          <Image
            width={3600}
            height={1800}
            className={`header_visual ${isLoaded ? "visible" : ""}`}
            src={`/img/header/header_main.png?ver=1.0.2`}
            alt='メインヴィジュアル'
          />
          <Image
            layout='responsive'
            width={804}
            height={208}
            className='blur'
            src={`/img/header/header_blur.png?ver=1.0.2`}
            alt='ぼかし画像'
          />
        </div>
      </div>
    </header>
  );
});
export default Header;
