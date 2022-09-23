import React from "react";
import FooterCloud from "./FooterCloud";
import style from "../../styles/Footer.module.scss";

const Footer: React.FC = React.memo(() => {
  return (
    <div className={`footer ${style.wrap}`}>
      <div className={style.wrap__inner}>
        <FooterCloud />
        <div className={style.sl}>
          <div></div>
        </div>
      </div>
    </div>
  );
});
export default Footer;
