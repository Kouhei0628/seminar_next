import { breakpoints } from "../../breakpoints/breakpoints";
import HeaderOrn from "../ornaments/HeaderOrn";
import TimeComp from "./TimeComp";
import style from "../../../styles/Hidden.module.scss";

const Hidden: React.FC = () => {
  return (
    <div className={style.section} id='hidden'>
      <HeaderOrn logo='hidden' />
      <div className={style.description}>
        <p>CS祭終了後に解放されます。</p>
        <p>
          解放まであと <TimeComp />
        </p>
      </div>
    </div>
  );
};
export default Hidden;
