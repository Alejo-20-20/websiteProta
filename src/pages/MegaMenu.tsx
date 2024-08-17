import { FunctionComponent } from "react";
import MENU from "../components/MENU";
import styles from "./MegaMenu.module.css";

const MegaMenu: FunctionComponent = () => {
  return (
    <div className={styles.megaMenu}>
      <div className={styles.megaMenuInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.logoWrapper}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
            </div>
            <a className={styles.protagonista}>Protagonista</a>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.img} />
            <div className={styles.iconParent}>
              <div className={styles.icon}>
                <img
                  className={styles.arrowcircleuprightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowcircleupright.svg"
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.uiGameDesign}>UI Game Design</h1>
                <div className={styles.date}>
                  <div className={styles.oct122024}>Oct 12, 2024</div>
                </div>
                <div className={styles.nuncVulputateLibero}>
                  Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MENU />
    </div>
  );
};

export default MegaMenu;
