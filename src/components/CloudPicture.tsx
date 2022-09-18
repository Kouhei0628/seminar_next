import { breakpoints } from "../breakpoints/breakpoints";
import style from "../../styles/CloudPicture.module.scss";
import Image from "next/image";

const CloudPicture: React.FC = () => {
  return (
    <div className={style.picturesWrap}>
      <picture className='for-pc'>
        <Image
          src={`/img/header/header_bganime-p.png?ver=1.0.1`}
          width='1920'
          height='1080'
          alt='雲の流れる動画'
          className='png'
        />
      </picture>
      <picture className='for-mobile'>
        <Image
          src={`/img/header/header_bganime-m.png?ver=1.0.1`}
          width='1920'
          height='1080'
          alt='雲の流れる動画'
          className='png'
        />
      </picture>
    </div>
  );
};
export default CloudPicture;
