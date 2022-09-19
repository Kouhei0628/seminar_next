import HeaderOrn from "../ornaments/HeaderOrn";
import StoryText from "./StoryText";
import style from "../../../styles/Story.module.scss";

const Story: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.cloudWrap}>
        <div className={`story cloud cloud__top`} />
        <div className={style.storyWrap} id='story'>
          <HeaderOrn logo='story' />
          <div className={style.content}>
            <StoryText />
          </div>
        </div>
        <div className={`story cloud cloud__bottom`} />
      </div>
    </section>
  );
};
export default Story;
