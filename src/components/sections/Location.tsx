import { useInView } from "react-intersection-observer";
import HeaderOrn from "../ornaments/HeaderOrn";
import style from "../../../styles/Location.module.scss";

const Location: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section className={style.wrap} ref={ref} id='location'>
      <HeaderOrn logo='location' />
      <div className={style.flexWrap}>
        <div>
          <div className={style.text}>
            <h4>バス乗り場 横浜線相原駅 徒歩2分</h4>
          </div>
          <div className={`${style.map} ${inView ? style.visible : ""}`}>
            <img
              src={`/img/location/loc_1.png?ver=1.0.0`}
              alt='バス乗り場から教室までの道のり'
            />
          </div>
        </div>
        <div>
          <div className={style.text}>
            <h4>東京造形大学８号館２階「８−２０６」教室</h4>
          </div>
          <div className={style.adress}>
            <p>〒192-0992 東京都八王子市宇津貫町１５５６</p>
          </div>
          <div className={`${style.map} ${inView ? style.visible : ""}`}>
            <img
              src={`/img/location/loc_2.png?ver=1.0.0`}
              alt='東京造形大学全体図'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
