import { FunctionComponent } from "react";
import styles from "./Portfolio1.module.css";

const Portfolio1: FunctionComponent = () => {
  return (
    <div className={styles.portfolio02}>
      <main className={styles.image}>
        <header className={styles.menu}>
          <div className={styles.frameParent}>
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
          <div className={styles.menuInner}>
            <div className={styles.frameGroup}>
              <div className={styles.logoWrapper}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameChild} />
              </div>
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
        </header>
        <section className={styles.imageInner}>
          <div className={styles.timeContainerParent}>
            <div className={styles.timeContainer}>
              <div className={styles.time}>Jan 12, 2024</div>
            </div>
            <div className={styles.illustrationContainerWrapper}>
              <div className={styles.illustrationContainer}>
                <div className={styles.frameContainer}>
                  <div className={styles.illustrationWrapper}>
                    <div className={styles.illustration}>ILLUSTRATION</div>
                  </div>
                  <h1 className={styles.illustratingFairyTales}>
                    {" "}
                    Illustrating Fairy Tales
                  </h1>
                </div>
                <div className={styles.illustrationContainerInner}>
                  <div className={styles.scrollToExploreParent}>
                    <div className={styles.scrollToExplore}>
                      sCROLL TO EXPLORE
                    </div>
                    <div className={styles.iconContainer}>
                      <div className={styles.icon2}>
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
            <div className={styles.separatorContainerParent}>
              <div className={styles.separatorContainer}>
                <div className={styles.separator}>01</div>
              </div>
              <div className={styles.footerWrapper}>
                <b className={styles.footer}>-</b>
              </div>
              <div className={styles.separatorContainer1}>
                <div className={styles.div}>03</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio1;
