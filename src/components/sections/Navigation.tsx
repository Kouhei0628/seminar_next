import Link from "next/link";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import { useContext } from "react";
import { NaviContext } from "../../context/NaviContext";
import navImages from "../../data/mainNav-img";
import style from "../../../styles/Navigation.module.scss";

const Navigation: React.FC = () => {
  const [, setRef] = useContext(NaviContext);
  return (
    <nav className={style.navigation} id='navigation'>
      <div className={style.navigation__wrap}>
        <ul className={style.list}>
          {navImages.map(ni => (
            <li key={ni.id}>
              <Scroll
                className='scroll'
                style={{ position: "relative" }}
                to={`/#${ni.ref}`}
                onClick={() => setRef(ni.ref)}
                smooth={true}>
                <Image
                  layout='fill'
                  className={style.navIcon}
                  src={`/img/navigation/nav_${ni.ref}.png`}
                  alt={ni.alt}
                />
              </Scroll>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
