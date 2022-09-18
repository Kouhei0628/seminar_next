import HeaderOrn from "../ornaments/HeaderOrn";
import MembersContent from "./MembersContent";
import style from "../../../styles/Members.module.scss";

const Members: React.FC = () => {
  return (
    <section className={style.wrap}>
      <div className={style.cloudWrap}>
        <div className='members cloud__top' />
        <div className={style.membersWrap} id='members'>
          <HeaderOrn logo='members' />
          <MembersContent />
        </div>
      </div>
    </section>
  );
};
export default Members;
