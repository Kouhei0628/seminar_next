import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { LoadingContext } from "../context/LoadingContext";
import style from "../../styles/Loading.module.scss";

const Loading: React.FC = () => {
  const [isLoaded] = useContext(LoadingContext);
  return (
    <div className={style.wrap + `${isLoaded ? "hidden" : ""}`}>
      <div>
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

const LoadWrap = styled.div`
  background-color: #2c2825;
  background-image: url(/img/background/all-bg_gear2.png?ver=1.0.1);
  background-repeat: repeat;
  background-size: 90px;
  background-position: center;
  position: fixed;
  z-index: 800;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  visibility: visible;
  transition: all ease-in-out 0.5s;
  transition-delay: 1s;
  opacity: 1;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
  div {
    width: 70vw;
    height: 40vw;
    margin: 0 auto;
    background-image: url(/img/loading.png?ver=1.0.1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 52%;
      animation: fadeIn 0.3s ease-in-out;
      @keyframes fadeIn {
        from {
          filter: blur(10px);
          opacity: 0;
        }
        to {
          filter: blur(0);
          opacity: 1;
        }
      }
    }
  }
  h2 {
    font-size: 25px;
    color: #e4e4e4;
  }
`;
