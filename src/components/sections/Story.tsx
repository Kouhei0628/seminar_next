import { useInView } from "react-intersection-observer";
import style from "../../../styles/Story.module.scss";
import HeaderOrn from "../ornaments/HeaderOrn";
import StoryText from "./StoryText";

const Story: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
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
