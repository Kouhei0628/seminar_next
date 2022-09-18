import Link from "next/link";
import { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NaviContext } from "../../context/NaviContext";
import style from "../../../styles/FixNavListItem.module.scss";

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
    <li className={`${style.listItem} ${isSelected ? "selected" : ""}`}>
      <Link href={`/#${itemRef}`}>
        <a onClick={() => setRef(itemRef)}>
          <div className={style.navIconWrap}>
            <img
              className={style.navIcon}
              src={`/img/navigation/fix/fix_${itemRef}.png?ver=1.0.0`}
              alt={`${alt}`}
            />
          </div>
        </a>
      </Link>
    </li>
  );
};
export default FixNavListItem;
