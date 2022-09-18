import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { NaviContext } from "../../context/NaviContext";
import navImages from "../../data/mainNav-img";
import style from "../../../styles/Navigation.module.scss";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [, setRef] = useContext(NaviContext);
  return (
    <nav className={style.navigation} id='navigation'>
      <div className={style.navigation__wrap}>
        <ul className={style.list}>
          {navImages.map(ni => (
            <li key={ni.id}>
              <button
                onClick={() => setRef(ni.ref)}
                style={{ width: "100%", height: "100%" }}>
                <Link href={`/#${ni.ref}`}>
                  <a>
                    <Image
                      layout='fill'
                      className={style.navIcon}
                      src={`/img/navigation/nav_${ni.ref}.png`}
                      alt={ni.alt}
                    />
                  </a>
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
