import { useEffect, useState } from "react";
import { useMedia } from "use-media";
import styled from "styled-components";
import Image from "next/image";
import { breakpoints } from "../breakpoints/breakpoints";
import navImages from "../data/mainNav-img";
import { colors } from "../data/colors";
import FixNavListItem from "./sections/FixNavListItem";
import style from "../../styles/FixNavigation.module.scss";
import Link from "next/link";

const FixNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isNarrow: boolean = useMedia({ minWidth: breakpoints.m });

  const toggleVisibility = (): void => {
    const scrolledToBottom: boolean =
      window.scrollY >
      document.querySelector("body")!.getBoundingClientRect().bottom * 3;

    // 1200pxスクロールしたら表示する
    if (!isNarrow) {
      // for mobile
      window.scrollY > 650 ? setIsVisible(true) : setIsVisible(false);
      if (scrolledToBottom) setIsVisible(false);
    } else {
      if (scrolledToBottom) {
        // for narrow desktop
        setIsVisible(true);
        window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const twiLink: string = "https://twitter.com/kaishizemi2022";

  return (
    <div>
      <div className={style.snsIcon + `${isVisible ? "visible" : ""}`}>
        <a href={twiLink} target={"_blank"} rel='noopener noreferrer'>
          <Image
            width={90}
            height={90}
            src={`/img/navigation/fix/fix_twitter.svg`}
            alt={`Twitterアイコン`}
          />
        </a>
      </div>
      <div className={`${style.fixWrap} ${isVisible ? "visible" : ""}`}>
        <ul className={style.fixNavList}>
          {navImages.map(ni => (
            <FixNavListItem key={ni.id} itemRef={ni.ref} alt={ni.alt} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FixNavigation;
