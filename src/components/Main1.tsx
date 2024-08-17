import { FunctionComponent } from "react";
import NAVIGATION2 from "./NAVIGATION2";
import Button from "./Button";
import styles from "./Main1.module.css";

export type Main1Type = {
  className?: string;
};

const Main1: FunctionComponent<Main1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.img}>
          <NAVIGATION2 />
          <div className={styles.hero}>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.contentBox}>
                  <h1 className={styles.unleashYourCreative}>
                    Unleash Your Creative Vision
                  </h1>
                  <div
                    className={styles.welcomeToProtagonista}
                  >{`Welcome to Protagonista, where art and creativity know no bounds, soaring freely. `}</div>
                </div>
                <div className={styles.actions}>
                  <Button
                    icon
                    propBackgroundColor="#5c29dd"
                    propBorder="unset"
                    propPadding="12px 32px"
                    propWidth="unset"
                    buttonHover="Get Start now"
                    propColor="#fff"
                    propMinWidth="111px"
                    propTextDecoration="unset"
                    propFontWeight="unset"
                    propFlex="unset"
                    arrowDownRight="/arrowdownright.svg"
                  />
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.icon}>
                  <img
                    className={styles.arrowdownIcon}
                    loading="lazy"
                    alt=""
                    src="/arrowdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main1;
