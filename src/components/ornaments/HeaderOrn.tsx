import Image from "next/image";
import style from "../../../styles/HeaderOrn.module.scss";

type Props = {
  logo: string;
};

const HeaderOrn: React.FC<Props> = ({ logo }) => {
  return (
    <div className={style.wrap}>
      <Image
        width={277}
        height={151}
        className={`${style.image} ${
          logo === "thieves" || logo === "hidden" ? style.thieves : ""
        }`}
        src={`/img/logos/logo_${logo}-000.svg`}
        alt={`${logo}のロゴ`}
      />
    </div>
  );
};
export default HeaderOrn;
