import Image from "next/image";
import { useInView } from "react-intersection-observer";
import style from "../../styles/LogoAndCopy.module.scss";

const LogoAndCopy: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className={style.logoAndCopy}>
      <div className={`${style.imgWrap} ${inView ? style.inview : ""}`}>
        <Image
          layout='fill'
          objectFit='contain'
          quality={70}
          className={`${style.image}`}
          src={`/img/header/header_logocopy.png?ver=1.0.1`}
          alt='メインロゴ'
        />
      </div>
    </div>
  );
};
export default LogoAndCopy;
