import { FunctionComponent } from "react";
import Main1 from "../components/Main1";
import FrameComponent8 from "../components/FrameComponent8";
import Heading1 from "../components/Heading1";
import Content from "../components/Content";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import Button from "../components/Button";
import FeaturedProject from "../components/FeaturedProject";
import FrameComponent12 from "../components/FrameComponent12";
import FOOTER from "../components/FOOTER";
import styles from "./HomeCreativeAgency.module.css";

const HomeCreativeAgency: FunctionComponent = () => {
  return (
    <div className={styles.homeCreativeAgency}>
      <Main1 />
      <FrameComponent8 />
      <section className={styles.partners}>
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/isnt-this-the-doordash-logo.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/flow.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/hourglass.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/circle.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/cursive-p.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/hourglass-1.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/flow-1.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/circle-1.svg"
        />
        <img className={styles.isntThisTheDoordashLogo} alt="" src="/m.svg" />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/hourglass-2.svg"
        />
        <img className={styles.isntThisTheDoordashLogo} alt="" src="/n.svg" />
        <img className={styles.isntThisTheDoordashLogo} alt="" src="/eye.svg" />
      </section>
      <section className={styles.services}>
        <Heading1 />
        <Content />
      </section>
      <section className={styles.banner}>
        <h2 className={styles.quotes}>Get 30% discount photoshoot in studio</h2>
        <div className={styles.quotes1}>
          <div className={styles.quotesChild} />
        </div>
        <h2 className={styles.quotes}>Get 30% discount photoshoot in studio</h2>
        <div className={styles.quotes1}>
          <div className={styles.quotesChild} />
        </div>
        <h2 className={styles.quotes}>Get 30% discount photoshoot in studio</h2>
      </section>
      <FrameComponent9 />
      <FrameComponent10 />
      <FrameComponent11 />
      <section className={styles.headingWrapper}>
        <header className={styles.heading}>
          <h1 className={styles.showcasingOurCreative}>
            Showcasing Our Creative Journey
          </h1>
          <div className={styles.journeyButton}>
            <Button
              icon={false}
              propBackgroundColor="unset"
              propBorder="1px solid #abb0b4"
              propPadding="10px 30px 10px 31px"
              propWidth="unset"
              buttonHover="View all"
              propColor="#121518"
              propMinWidth="62px"
              propTextDecoration="unset"
              propFontWeight="unset"
              propFlex="unset"
              arrowDownRight="/arrowdownright1.svg"
            />
          </div>
        </header>
      </section>
      <FeaturedProject />
      <FrameComponent12 />
      <FOOTER
        protagonista="pending_I7736:3114;7617:3525"
        lOGO="/logo-11@2x.png"
        propTextShadow="unset"
        infoProtagonistamx="Info@Protagonista.mx"
        mEXMID="MEX-MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved---"
      />
    </div>
  );
};

export default HomeCreativeAgency;
