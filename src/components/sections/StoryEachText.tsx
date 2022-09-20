import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import style from "../../../styles/StoryEachText.module.scss";

interface Props {
  children: ReactNode;
}

const StoryEachText: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <span
      ref={ref}
      className={`${style.fadeIn} ${inView ? style.visible : ""}`}>
      {children}
    </span>
  );
};
export default StoryEachText;
