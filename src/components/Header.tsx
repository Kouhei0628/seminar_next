import Image from "next/image";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { LoadingContext } from "../context/LoadingContext";
import { colors } from "../data/colors";
import CloudPicture from "./CloudPicture";
import LogoAndCopy from "./LogoAndCopy";

const Header: React.FC = React.memo(() => {
  const [isLoaded, setIsLoaded] = useContext(LoadingContext);
  return (
    <header className='header'>
      <HeaderWrap onLoad={() => setIsLoaded(true)}>
        <TopmostCloud />
        <ProvVisual>
          <Image
            layout='responsive'
            width={3600}
            height={1800}
            className={`${isLoaded ? "visible" : ""}`}
            src={`/img/header/header_main.png?ver=1.0.2`}
            alt='メインヴィジュアル'
          />
        </ProvVisual>
        <CloudWrap>
          <CloudTop />
          <HeaderCloud>
            <CloudPicture />
            <LogoAndCopy />
          </HeaderCloud>
          <CloudBottom />
        </CloudWrap>
        <HeaderVisual>
          <Image
            layout='responsive'
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
        </HeaderVisual>
      </HeaderWrap>
    </header>
  );
});
export default Header;

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const TopmostCloud = styled.div`
  background-image: url(/img/story/story_bg-top.png?ver=1.0.1);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  z-index: 2;
  top: -50px;
  left: 0;
  transform: rotate(180deg);
  width: 100%;
  height: 30vw;
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const HeaderCloud = styled.div`
  background-color: ${colors.storyBg};
  width: 100%;
  height: calc(550px + 15vw);
  margin-top: -40px;
  margin-bottom: -20px;
  @media (min-width: ${breakpoints.m}) {
    height: calc(450px + 15vw);
    margin-bottom: 0;
  }
  position: relative;
`;
const CloudWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(90px + 30vw);
  left: 0;
  z-index: 1;
  @media (min-width: ${breakpoints.m}) {
    top: unset;
  }
`;
const CloudTop = styled.div`
  background-image: url(/img/story/story_bg-top.png?ver=1.0.1);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;
  width: 100%;
  height: calc(250px + 25vw);
  transform: translateY(calc(200px - 2.5vw));
  @media (min-width: ${breakpoints.m}) {
    display: none;
    height: 0;
  }
`;
const CloudBottom = styled(CloudTop)`
  background-image: url(/img/story/story_bg-bottom.png?ver=1.0.1);
  background-size: cover;
  background-position: center bottom;
  display: block;
  transform: translateY(0);
  filter: brightness(95%);
  @media (min-width: ${breakpoints.m}) {
    height: 0;
    display: none;
  }
`;
const HeaderVisual = styled.div`
  width: 100%;
  display: none;
  transform: translateY(calc(-100px + 11vw));
  & > img {
    width: 100%;
    &.header_visual {
      filter: blur(50px);
      &.visible {
        animation: scaleIn2 2s ease forwards;
        @keyframes scaleIn2 {
          0% {
            filter: blur(50px);
          }
          68% {
            filter: blur(0px);
          }
          70% {
            filter: brightness(100%) blur(0px);
          }
          85% {
            filter: brightness(180%) blur(5px);
          }
          100% {
            filter: brightness(100%) blur(0px);
          }
        }
      }
    }
    &.blur {
      transform: translateY(-12vw);
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: block;
    position: absolute;
    z-index: 0;
    top: calc(480px + 5vw);
  }
`;

const ProvVisual = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  span {
    position: unset;
  }
  img {
    height: 100%;
    margin: 0 auto;
    opacity: 0;
    transform: translate(18%, -10%);
    transform-origin: center center;
    &.visible {
      opacity: 1;
      animation: scaleIn 2s ease forwards 1s;
      @keyframes scaleIn {
        0% {
          transform: scale(1.5) translate(18%, -10%);
        }
        70% {
          transform: scale(1) translate(18%, -10%);
          filter: brightness(100%);
        }
        85% {
          filter: brightness(180%);
        }
        100% {
          filter: brightness(100%);
        }
      }
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
