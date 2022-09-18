import Image from "next/image";
import style from "../../styles/LogoAndCopy.module.scss";

const LogoAndCopy: React.FC = () => {
  return (
    <div className={style.logoAndCopy}>
      <img
        // width={953}
        // height={757}
        src={`/img/header/header_logocopy.png?ver=1.0.1`}
        alt='メインロゴ'
      />
    </div>
  );
};
export default LogoAndCopy;
