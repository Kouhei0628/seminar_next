import members from "../../data/members.json";
import MemberListItem from "./MemberListItem";
import style from "../../../styles/MembersContent.module.scss";
import { useInView } from "react-intersection-observer";

type Member = { id: number; name: string };

type Members = (
  context: any
) => Promise<{ members: { membersList: Member[] } }>;

export const getStaticProps: Members = async context => {
  return { members };
};

const MembersContent: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className={`${style.content} ${inView ? style.inview : ""}`}>
      <ul className={style.list}>
        {members.membersList.map((m, i) => (
          <MemberListItem key={i} id={m.id} name={m.name} />
        ))}
      </ul>
    </div>
  );
};
export default MembersContent;
