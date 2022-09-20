import { useEffect, useState } from "react";
import style from "../../../styles/Gears.module.scss";

type Props = {
  isLeft?: boolean;
};
type Gears = {
  positionX?: number;
  positionY?: number;
  size?: number;
  type?: number;
  speed?: number;
};

const Gears: React.FC<Props> = ({ isLeft }) => {
  const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const gearState = {
    positionX: random(10, 80),
    positionY: random(10, 50),
    size: random(40, 250),
    type: random(1, 18),
    speed: random(55, 78),
  };
  const [gears, setGears] = useState<Gears>({});

  useEffect(() => {
    if (typeof window !== "undefined") setGears(gearState);
  }, []);

  return (
    <>
      <div
        className={style.gear}
        style={{
          width: `${gears.size}px`,
          height: `${gears.size}px`,
          marginTop: `-${gears.positionY}px`,
          transform: `translateX(${isLeft ? "-" : ""}${gears.positionX}%)`,
        }}>
        <div
          className={style.obj}
          style={{
            animationDuration: `${gears.speed}s`,
            backgroundImage: `url("/img/gears/gear_${gears.type}.svg?ver=1.0.0")`,
          }}></div>
      </div>
    </>
  );
};
export default Gears;
