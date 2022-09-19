import Story from "./sections/Story";
import Thieves from "./sections/Thieves";
import Summary from "./sections/Summary";
import Location from "./sections/Location";
import Members from "./sections/Members";
import Navigation from "./sections/Navigation";
import Hidden from "./sections/Hidden";
import Footer from "./Footer";
import Header from "./Header";
import Ornaments from "./ornaments/Ornaments";
import React from "react";
import style from "../../styles/Main.module.scss";

const Main: React.FC = React.memo(() => {
  return (
    <div className={`main ${style.all}`}>
      <Header />
      <div className={style.main__wrap}>
        <Navigation />
        <div className={`under_navi ${style.under_navi}`}>
          <Ornaments />
          <Story />
          <Thieves />
          <Summary />
          <Location />
          <Members />
          <Hidden />
          <Footer />
        </div>
      </div>
    </div>
  );
});
export default Main;
