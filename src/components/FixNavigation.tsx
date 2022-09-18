import { useEffect, useState } from "react";
import { useMedia } from "use-media";
import { breakpoints } from "../breakpoints/breakpoints";
import navImages from "../data/mainNav-img";
import { colors } from "../data/colors";
import styled from "styled-components";
import FixNavListItem from "./sections/NavIconWrap";
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/FixNavigation.module.scss";

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
        <Link href={twiLink} target={`_blank`} rel='noreferrer'>
          <a>
            <Image
              layout={`fill`}
              src={`/img/navigation/fix/fix_twitter.svg`}
              alt={`Twitterアイコン`}
            />
          </a>
        </Link>
      </div>
      <FixWrap className={`fix-nav ${isVisible ? "visible" : ""}`}>
        <FixNavList>
          {navImages.map(ni => (
            <FixNavListItem key={ni.id} itemRef={ni.ref} alt={ni.alt} />
          ))}
        </FixNavList>
      </FixWrap>
    </div>
  );
};
export default FixNavigation;

const FixWrap = styled.div`
  position: -webkit-fixed;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 400;
  height: calc(53px + 10vw);
  width: 100%;
  background-color: ${colors.summaryBg};
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(100%);
  transform-origin: top;
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const FixNavList = styled.ul`
  list-style: none;
  padding: 4px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
