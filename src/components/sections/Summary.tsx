import { useInView } from "react-intersection-observer";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import summaries from "../../data/summaries";
import HeaderOrn from "../ornaments/HeaderOrn";
import style from "../../../styles/Summary.module.scss";

const Summary: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <section className={style.section}>
      <div className={style.cloudWrap}>
        <div className={`cloud__top summary`} />
        <div className={style.summWrap} id='summary'>
          <HeaderOrn logo='summary' />
          <div
            ref={ref}
            className={`${style.summMessage} ${inView ? "visible" : ""}`}
          />
          <div className={style.summContents}>
            <ul className={style.summContents__list}>
              {summaries.map(summary => (
                <li key={summary.id}>
                  <img
                    style={{
                      animationDelay: `${0.5 + summary.id * 0.1}s`,
                    }}
                    className={`${style.image} ${inView ? "visible" : ""}`}
                    src={`/img/summary/sum_${summary.img}.svg`}
                    alt={`${summary.alt}の画像`}
                  />
                  <div className={style.title}>
                    <p>{summary.title}</p>
                  </div>
                  <div className={`summary-desc ${style.description}`}>
                    {summary.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`cloud__bottom summary`} />
      </div>
    </section>
  );
};
export default Summary;
