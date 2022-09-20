import HeaderOrn from "../ornaments/HeaderOrn";
import StoryText from "./StoryText";
import style from "../../../styles/Story.module.scss";
import { useInView } from "react-intersection-observer";

const Story: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <section ref={ref} className={style.section}>
      <div className={style.cloudWrap}>
        <div className={`story cloud cloud__top`} />
        <div className={style.storyWrap} id='story'>
          <HeaderOrn logo='story' />
          <div className={`${style.content} ${inView ? style.inview : ""}`}>
            <StoryText />
          </div>
        </div>
        <div className={`story cloud cloud__bottom`} />
      </div>
    </section>
  );
};
export default Story;
