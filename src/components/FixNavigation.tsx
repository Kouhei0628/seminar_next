import { useEffect, useState } from "react";
import { useMedia } from "use-media";
import { breakpoints } from "../breakpoints/breakpoints";
import navImages from "../data/mainNav-img";
import FixNavListItem from "./sections/FixNavListItem";
import style from "../../styles/FixNavigation.module.scss";

const FixNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  /** 600px以上スクロールしたらナビゲーションを表示したい
   * （ブラウザ幅が630未満の場合）
   * 600px未満の場合はナビゲーションを表示しない
   * 下辺付近までスクロールしたらナビゲーションを非表示にしたい
   * 下辺付近から画面が離れたらナビゲーションを表示したい
   */
  useEffect(() => {
    const toggleVisibility = (): void => {
      const isNarrow: boolean = window.innerWidth < 630;
      const scrolledToBottom: boolean =
        window.scrollY > document.querySelector(".main")!.clientHeight - 1500;
      const scrolledOverX: (n: number) => boolean = n => window.scrollY > n;
      if (!isNarrow) return;
      scrolledOverX(600) ? setIsVisible(true) : setIsVisible(false);
      scrolledToBottom ? setIsVisible(false) : setIsVisible(true);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const twiLink: string = "https://twitter.com/kaishizemi2022";

  return (
    <div className={style.fixNavWrap}>
      <div className={`${style.snsIcon} ${isVisible ? style.visible : ""}`}>
        <a href={twiLink} target={"_blank"} rel='noopener noreferrer'>
          <img
            src={`/img/navigation/fix/fix_twitter.svg`}
            alt={`Twitterアイコン`}
          />
        </a>
      </div>
      <div className={`${style.fixWrap} ${isVisible ? style.visible : ""}`}>
        <ul className={style.fixNavList}>
          {navImages.map(ni => (
            <FixNavListItem key={ni.id} itemRef={ni.ref} alt={ni.alt} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FixNavigation;
