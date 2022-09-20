import { useInView } from "react-intersection-observer";
import style from "../../../styles/MemberListItem.module.scss";

interface Props {
  id: number;
  name: string;
}

const MemberListItem: React.FC<Props> = ({ id, name }) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 1,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });

  return (
    <li className={style.listItem} ref={ref}>
      <div className='list-wrap'>
        <div className={style.imgWrap}>
          <img
            className={style.gear}
            src={`/img/members/mem_icon.svg`}
            alt={`歯車`}
          />
          <img
            className={style.icon}
            src={`/img/members/member/m-${id}.jpg`}
            alt={`${name}`}
          />
        </div>
        <p className={`${style.name} ${inView ? style.visible : ""}`}>{name}</p>
      </div>
    </li>
  );
};
export default MemberListItem;
