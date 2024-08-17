import { FunctionComponent } from "react";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.img} />
        <div className={styles.img} />
        <header className={styles.menu}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo2@2x.png"
            />
            <a className={styles.protagonista}>PROTAGONISTA</a>
          </div>
          <div className={styles.navigation}>
            <div className={styles.menu1}>
              <div className={styles.dropdown}>
                <div className={styles.quickLinks}>
                  <a className={styles.home}>Home</a>
                </div>
                <img
                  className={styles.caretdownIcon}
                  alt=""
                  src="/caretdown.svg"
                />
              </div>
              <div className={styles.quickLinks1}>
                <a className={styles.services}>Services</a>
              </div>
              <div className={styles.quickLinks1}>
                <a className={styles.portfolio}>Portfolio</a>
              </div>
              <div className={styles.quickLinks3}>
                <a className={styles.page}>Page</a>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.quickLinks1}>
                <a className={styles.blog}>Blog</a>
              </div>
            </div>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className={styles.frameChild} />
              <img className={styles.icon1} alt="" src="/icon-1.svg" />
            </div>
          </div>
        </header>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroTitle}>
              <h1 className={styles.elevateYourVisual}>
                Elevate Your Visual Journey
              </h1>
            </div>
            <div
              className={styles.welcomeToProtagonista}
            >{`Welcome to Protagonista, where every moment becomes art and every idea turns into stunning visuals. `}</div>
            <div className={styles.callToAction}>
              <div className={styles.icon2}>
                <img
                  className={styles.arrowcirclerightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowcircleright.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerChild} />
      </div>
    </section>
  );
};

export default Main;
