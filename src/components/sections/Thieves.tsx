import { useInView } from "react-intersection-observer";
import thieves from "../../data/coats";
import HeaderOrn from "../ornaments/HeaderOrn";
import style from "../../../styles/Thieves.module.scss";

const Thieves: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section className={style.wrap} id='thieves'>
      <HeaderOrn logo='thieves' />
      <div className={style.subTitle}>
        <h3>怪盗団とは</h3>
      </div>
      <div className={style.description}>
        <p className={`${inView ? "inview" : ""}`}>
          フェルミアはアトミシアとの侵略戦争に敗北した。
          <br />
          <br />
          才能をもった科学者たちはアトミシアの貴族に囚われ、貴族の元で新しい発明に貢献することを余儀なくされてしまった。
          <br />
          <br />
          アトミシア貴族に恨みをもつフェルミアの一族は組織「アウロラ」を形成し
          <br />
          怪盗団を運営することでアトミシアへの復讐を目論んだ。
        </p>
      </div>
      <div className={style.content}>
        <ul className={style.list} ref={ref}>
          {thieves.map(thief => (
            <li key={thief.id}>
              <img
                style={{ animationDelay: `${thief.id * 0.2}s` }}
                className={`${style.image} ${inView ? "visible" : ""}`}
                src={`/img/thieves/thieves_emb${thief.id}.jpg`}
                alt={thief.alt}
              />
              <div className={style.name}>
                <p>{thief.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Thieves;
