import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../../data/members";
import MemberListItem from "./MemberListItem";
import style from "../../../styles/MembersContent.module.scss";

const MembersContent: React.FC = () => {
  return (
    <div className={style.content}>
      <ul className={style.list}>
        {members.map((m, i) => (
          <MemberListItem key={i} id={m.id} name={m.name} />
        ))}
      </ul>
    </div>
  );
};
export default MembersContent;
