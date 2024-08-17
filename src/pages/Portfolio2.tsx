import { FunctionComponent } from "react";
import styles from "./Portfolio2.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio03}>
      <div className={styles.img}>
        <div className={styles.time}>
          <div className={styles.jan122024}>Jan 12, 2024</div>
        </div>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.menuWrapper}>
          <header className={styles.menu}>
            <div className={styles.logoRowParent}>
              <div className={styles.logoRow}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
              </div>
              <a className={styles.protagonista}>Protagonista</a>
            </div>
            <div className={styles.menuOptions}>
              <div className={styles.optionsRow}>
                <div className={styles.logoRow}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon2.svg"
                  />
                </div>
                <div className={styles.optionsRowInner}>
                  <div className={styles.frameChild} />
                </div>
                <img className={styles.icon1} alt="" src="/icon-12.svg" />
              </div>
            </div>
          </header>
        </div>
        <div className={styles.illustrationContainer}>
          <div className={styles.illustrationRow}>
            <div className={styles.illustrationContent}>
              <h3 className={styles.illustration}>ILLUSTRATION</h3>
            </div>
            <h1 className={styles.illustratingFairyTales}>
              Illustrating Fairy Tales
            </h1>
          </div>
        </div>
        <div className={styles.projectSelection}>
          <div className={styles.selectionRow}>
            <b className={styles.selectProject}>Select Project</b>
            <div className={styles.separatorContainer}>
              <b className={styles.separator}>01</b>
              <b className={styles.separator1}>-</b>
              <b className={styles.separator2}>04</b>
            </div>
          </div>
          <div className={styles.projectGallery}>
            <div className={styles.img1} />
            <div className={styles.img2}>
              <b className={styles.imagePlaceholder}>02</b>
            </div>
            <div className={styles.img1} />
            <div className={styles.img1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
