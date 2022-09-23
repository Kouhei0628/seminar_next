import style from "../../styles/FooterCloud.module.scss";

const FooterCloud: React.FC = () => {
  const twitterLink: string = "https://twitter.com/kaishizemi2022";
  return (
    <div className={style.wrap}>
      <a
        className={style.wrap__anchor}
        href={twitterLink}
        target='_blank'
        rel='noreferrer'>
        <div className={style.flexWrap}>
          <img
            className={style.image}
            src={`/img/footer/foot_twitter.svg`}
            alt={`Twitterロゴ`}
          />
          <span className={style.text}>@kaishizemi2022</span>
        </div>
      </a>
    </div>
  );
};
export default FooterCloud;
