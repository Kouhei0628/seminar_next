import style from "../../../styles/StoryText.module.scss";
import StoryEachText from "./StoryEachText";

const StoryText: React.FC = () => {
  return (
    <p className={style.wrap}>
      <StoryEachText key={1}>
        私は怪盗育成学校、ヴェルスラミナに通う生徒。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={2}>
        ヴェルスラミナとは
        <br />
        先進国アトミシアに復讐を目論む
        <br />
        組織アウロラが運営している
        <br />
        怪盗を育成するための施設。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={3}>
        実力が認められ、アウロラから
        <br />
        届く入団試験に合格すると
        <br />
        怪盗団に所属し
        <br />
        怪盗として暗躍することとなる。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={4}>
        ある日私が授業を終え
        <br />
        ヴェルスラミナの寄宿舎に帰ると
        <br />
        一通の封筒が届いていた。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={5}>
        中を見てみると
        <br />
        世界初の旅客鉄道「ゼニス号」の乗車券と
        <br />
        一枚の書類が入っており
        <br />
        書類には入団試験の内容が書かれていた。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={6}>
        入団試験の内容はゼニス号に乗り込み
        <br />
        アトミシアの貴族から
        <br />
        政府の情報または
        <br />
        財産を盗むことだった。
      </StoryEachText>
    </p>
  );
};
export default StoryText;
