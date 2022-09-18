import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Gears from "./Gears";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import style from "../../../styles/Ornaments.module.scss";

const Ornaments = React.memo(() => {
  const gearAmount: string[] = [...Array(100).fill("")];
  const option = {
    scrollTrigger: {
      trigger: ".under-navi",
      start: "top bottom",
      end: "1500 bottom",
      scrub: true,
    },
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlA = gsap.timeline(option);
    tlA.fromTo(
      ".innerL",
      { transform: "translateX(-100%)" },
      { transform: "translateX(0%)" }
    );
    const tlB = gsap.timeline(option);
    tlB.fromTo(
      ".innerR",
      { transform: "translateX(100%)" },
      { transform: "translateX(30%)" }
    );
  });
  return (
    <>
      <div className={style.ornaments__l}>
        <div className={style.ornaments__wrap}>
          <div className={`innerL ${style.ornaments__inner}`}>
            {gearAmount.map((_, i) => (
              <Gears key={i} isLeft />
            ))}
          </div>
        </div>
      </div>
      <div className={style.ornaments__r}>
        <div className={style.ornaments__wrap}>
          <div className={`innerR ${style.ornaments__inner}`}>
            {gearAmount.map((_, i) => (
              <Gears key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
export default Ornaments;
