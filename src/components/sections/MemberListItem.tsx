import { useInView } from "react-intersection-observer";
import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../../data/members";
import style from "../../../styles/MemberListItem.module.scss";
import Image from "next/image";

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
            // width={196}
            // height={163}
            src={`/img/members/mem_icon.svg`}
            alt={`歯車`}
          />
          <img
            className={style.icon}
            // width={200}
            // height={200}
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

// const arrangeAlternatelyStyle: string[] = members
//   .filter(m => m.id % 5 === 0 || (m.id + 1) % 5 === 0)
//   .map(
//     m =>
//       `
//     &:nth-child(${m.id}) {
//       width: calc(100% / 2);
//       justify-content: flex-${m.id % 5 === 0 ? "start" : "end"};
//       .list-wrap {
//         width: auto;
//         p {
//           ${
//             m.id % 5 === 0
//               ? "left: 0; transform: translateX(65px);"
//               : "right: unset;"
//           }
//         }
//       }
//       @media (max-width: 298px) {
//         width: 100%;
//         .list-wrap {
//           p {
//             left: 40%;
//             right: unset;
//             transform: translateX(0);
//           }
//         }
//       }
//       @media (max-width: 377px) {
//         justify-content: center;
//         width: 50%;
//       }
//       @media (min-width: 377px) {
//         p {
//           transform: translateX(${
//             (m.id + 1) % 5 === 0 ? "calc(-38px + 18vw)" : "0"
//           });
//         }
//       }
//       @media (min-width: ${breakpoints.l}) {
//         width: calc(100% / 5);
//         justify-content: center;
//         .list-wrap p {
//           ${
//             m.id % 5 === 0
//               ? "left: 40%; transform: translateX(0)"
//               : "right: initial; transform: translateX(0);"
//           }

//         }
//       }
//     }`
//   );
