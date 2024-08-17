import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./Heading1.module.css";

export type Heading1Type = {
  className?: string;
};

const Heading1: FunctionComponent<Heading1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.heading, className].join(" ")}>
      <h1 className={styles.text}>Our Creative Offerings</h1>
      <div className={styles.descriptionContainer}>
        <div
          className={styles.serviceDescription}
        >{`Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu `}</div>
        <div className={styles.features}>
          <div className={styles.featureList}>
            <img className={styles.checkIcon} alt="" src="/check.svg" />
            <div className={styles.text1}>
              Gorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className={styles.featureList}>
            <img className={styles.checkIcon} alt="" src="/check.svg" />
            <div className={styles.text1}>
              Gorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className={styles.featureList}>
            <img className={styles.checkIcon} alt="" src="/check.svg" />
            <div className={styles.text1}>
              Gorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
      <Button
        icon
        propBackgroundColor="#5c29dd"
        propBorder="unset"
        propPadding="12px 32px"
        propWidth="unset"
        buttonHover="About Us"
        propColor="#fff"
        propMinWidth="72px"
        propTextDecoration="unset"
        propFontWeight="unset"
        propFlex="unset"
        arrowDownRight="/arrowdownright.svg"
      />
    </div>
  );
};

export default Heading1;
