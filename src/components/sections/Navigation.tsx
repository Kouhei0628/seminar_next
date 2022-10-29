import Image from "next/image";
import { useContext } from "react";
import { Link as Scroll } from "react-scroll";
import style from "../../../styles/Navigation.module.scss";
import { NaviContext } from "../../context/NaviContext";
import navImages from "../../data/mainNav-img";

const Navigation: React.FC = () => {
  const [, setRef] = useContext(NaviContext);
  return (
    <nav className={style.navigation} id='navigation'>
      <div className={style.navigation__wrap}>
        <ul className={style.list}>
          {navImages.map(ni => (
            <li key={ni.id} className={style.item}>
              <Scroll
                className={style.scroll}
                style={{ position: "relative" }}
                to={ni.ref}
                onClick={() => setRef(ni.ref)}
                smooth>
                <div className={style.imgWrap}>
                  <Image
                    layout='fill'
                    objectFit='contain'
                    className={style.navIcon}
                    src={`/img/navigation/nav_${ni.ref}.png`}
                    alt={ni.alt}
                  />
                </div>
              </Scroll>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
