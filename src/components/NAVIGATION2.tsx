import { FunctionComponent } from "react";
import styles from "./NAVIGATION2.module.css";

export type NAVIGATION2Type = {
  className?: string;
};

const NAVIGATION2: FunctionComponent<NAVIGATION2Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <a className={styles.diginova}>Protagonista</a>
        </div>
        <div className={styles.menu1}>
          <div className={styles.quickLinks}>
            <div className={styles.quickLinks1}>
              <a className={styles.home}>Home</a>
            </div>
            <img
              className={styles.caretdownIcon}
              alt=""
              src="/caretdown1.svg"
            />
          </div>
          <div className={styles.quickLinks2}>
            <a className={styles.services}>Services</a>
          </div>
          <div className={styles.quickLinks2}>
            <a className={styles.portfolio}>Portfolio</a>
          </div>
          <div className={styles.quickLinks}>
            <div className={styles.quickLinks2}>
              <a className={styles.page}>Page</a>
            </div>
            <img
              className={styles.caretdownIcon}
              alt=""
              src="/caretdown1.svg"
            />
          </div>
          <div className={styles.quickLinks2}>
            <a className={styles.blog}>Blog</a>
          </div>
        </div>
        <div className={styles.iconParent}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon1.svg" />
          <div className={styles.divider} />
          <img className={styles.icon1} alt="" src="/icon-11.svg" />
        </div>
      </div>
    </header>
  );
};

export default NAVIGATION2;
