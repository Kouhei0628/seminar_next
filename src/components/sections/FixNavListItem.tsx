import { Link as Scroll } from "react-scroll";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { NaviContext } from "../../context/NaviContext";
import style from "../../../styles/FixNavListItem.module.scss";
import Image from "next/image";

interface Props {
  itemRef: string;
  alt: string;
}

const FixNavListItem: React.FC<Props> = ({ itemRef, alt }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [ref, setRef] = useContext(NaviContext);
  useEffect(() => {
    if (itemRef === ref) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [itemRef, ref]);
  return (
    <li className={`${style.listItem} ${isSelected ? style.selected : ""}`}>
      <Scroll
        to={itemRef}
        smooth
        duration={700}
        onClick={() => setRef(itemRef)}>
        <div className={style.navIconWrap}>
          <Image
            width={94}
            height={107}
            objectFit='contain'
            className={`${style.listItem} navIcon`}
            src={`/img/navigation/fix/fix_${itemRef}.png?ver=1.0.0`}
            alt={`${alt}`}
          />
        </div>
      </Scroll>
    </li>
  );
};
export default FixNavListItem;
