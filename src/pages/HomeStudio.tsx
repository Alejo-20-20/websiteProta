import { FunctionComponent } from "react";
import Main from "../components/Main";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import Button from "../components/Button";
import FOOTER from "../components/FOOTER";
import styles from "./HomeStudio.module.css";

const HomeStudio: FunctionComponent = () => {
  return (
    <div className={styles.homeStudio}>
      <Main />
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <section className={styles.cta}>
        <h1 className={styles.theBestRunning}>
          The Best Running Shoes for Every Terrain
        </h1>
        <Button
          icon
          buttonHover="Book A quote"
          arrowDownRight="/arrowdownright.svg"
        />
      </section>
      <FOOTER
        protagonista="pending_I7736:2188;7617:3525"
        lOGO="/logo-1@2x.png"
        infoProtagonistamx="info@protagonista.com"
        mEXMID="MEX- MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved"
      />
    </div>
  );
};

export default HomeStudio;
