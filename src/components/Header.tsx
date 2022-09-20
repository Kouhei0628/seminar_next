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
            layout='fill'
            objectFit='contain'
            quality={100}
            className={`${style.provImg} ${isLoaded ? style.visible : ""}`}
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
          <div className={style.headerVisual_wrap}>
            <Image
              layout='fill'
              objectFit='contain'
              priority
              className={`${style.header_visual} ${
                isLoaded ? style.visible : ""
              }`}
              src={`/img/header/header_main.png?ver=1.0.2`}
              alt='メインヴィジュアル'
            />
          </div>
          <div className={style.blur_wrap}>
            <Image
              layout='fill'
              src={`/img/header/header_blur.png?ver=1.0.2`}
              alt='ぼかし画像'
            />
          </div>
        </div>
      </div>
    </header>
  );
});
export default Header;
