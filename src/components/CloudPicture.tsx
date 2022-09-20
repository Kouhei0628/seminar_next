import style from "../../styles/CloudPicture.module.scss";
import Image from "next/image";

const CloudPicture: React.FC = () => {
  return (
    <div className={style.picturesWrap}>
      <picture className={style.pc}>
        <Image
          src={`/img/header/header_bganime-p.png?ver=1.0.1`}
          layout='fill'
          priority
          alt='雲の流れる動画'
          className={style.png}
        />
      </picture>
      <picture className={style.mobile}>
        <Image
          src={`/img/header/header_bganime-m.png?ver=1.0.1`}
          layout='fill'
          priority
          alt='雲の流れる動画'
          className={style.png}
        />
      </picture>
    </div>
  );
};
export default CloudPicture;
