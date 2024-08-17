import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import PARTNER from "../components/PARTNER";
import Experience from "../components/Experience";
import Button from "../components/Button";
import Testimonial from "../components/Testimonial";
import WorkShowcase from "../components/WorkShowcase";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio01}>
      <Navigation1 />
      <PARTNER />
      <Experience />
      <section className={styles.graphicParent}>
        <img
          className={styles.graphicIcon}
          loading="lazy"
          alt=""
          src="/graphic-1@2x.png"
        />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-34992@2x.png"
        />
        <div className={styles.bannerContent}>
          <div className={styles.banner}>
            <h1 className={styles.cooperateWithUsContainer}>
              <span>{`cooperate with `}</span>
              <span className={styles.u}>U</span>
              <span>{`s to create the most `}</span>
              <span className={styles.u}>U</span>
              <span>nique project</span>
            </h1>
            <div className={styles.bannerButton}>
              <Button
                icon
                propBackgroundColor="#f37935"
                propBorder="unset"
                propPadding="17px 32px"
                propWidth="unset"
                buttonHover="Contact us"
                propColor="#f9f8f4"
                propMinWidth="88px"
                propTextDecoration="unset"
                propFontWeight="unset"
                propFlex="unset"
                arrowDownRight="/arrowdownright2.svg"
              />
            </div>
          </div>
          <Testimonial />
          <WorkShowcase />
        </div>
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Portfolio;
