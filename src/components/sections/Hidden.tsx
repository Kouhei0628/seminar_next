import { useContext } from "react";
import style from "../../../styles/Hidden.module.scss";
import { RestContext, RestProvider } from "../../context/RestContext";
import { answers } from "../../data/answers";
import HeaderOrn from "../ornaments/HeaderOrn";

const Hidden = () => {
  const time = useContext(RestContext);
  return (
    <RestProvider>
      <div className={style.section} id='hidden'>
        <HeaderOrn logo='hidden' />
        {time.isPassed ? (
          <div className={style.description}>
            <p>CS祭終了後に解放されます。</p>
            <p>
              解放まであと{" "}
              <span>
                {time.day} 日 {time.hour} 時間 {time.minute} 分
              </span>
            </p>
          </div>
        ) : (
          <div className={style.riddle}>
            <div className={style.riddleDesc}>
              <p className={style.riddleDescText}>
                <span style={{ color: "red" }}>【10/17解禁】</span>
                <br />
                入団試験の謎の真相がついに明らかに…！
              </p>
            </div>
            <ul className={style.list}>
              {answers.map((answer, i) => (
                <li key={i} className={style.listItem}>
                  <div
                    className={style.itemWrap}
                    style={{ borderColor: answer.color }}>
                    <div
                      className={style.itemWrap2}
                      style={{ borderColor: answer.color }}>
                      <div className={style.itemWrap3}>
                        <div className={style.image_wrap}>
                          <img
                            className={style.image}
                            src={`/img/hidden/answer_emb${answer.id}.jpg`}
                            alt={answer.title}
                          />
                        </div>
                        <div className={style.content_wrap}>
                          <h4 className={style.title}>{answer.title}</h4>
                          <p className={style.subtitle}>{answer.subtitle}</p>
                          <p>MISSION</p>
                          <ul className={style.missionlist}>
                            {answer.list.map((mission, mi) => (
                              <li key={mi}>
                                <p>{mission}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.answer}>
                    <p
                      className={style.answerText}
                      style={{ color: answer.color }}>
                      Answer【{answer.answer}】
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </RestProvider>
  );
};
export default Hidden;
