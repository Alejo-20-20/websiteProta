import { FunctionComponent } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.navigation, className].join(" ")}>
      <header className={styles.graphicParent}>
        <img className={styles.graphicIcon} alt="" src="/graphic.svg" />
        <div className={styles.menu}>
          <div className={styles.logoContainerParent}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo1@2x.png"
              />
            </div>
            <a className={styles.protagonista}>Protagonista</a>
          </div>
          <div className={styles.menuOptions}>
            <div className={styles.optionItemParent}>
              <div className={styles.logoContainer}>
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
        </div>
      </header>
      <div className={styles.socialMedia}>
        <div className={styles.socialIcons}>
          <div className={styles.antDesigninstagramFilledWrapper}>
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/antdesigninstagramfilled.svg"
            />
          </div>
          <div className={styles.antDesigninstagramFilledWrapper}>
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/akariconspinterestfill.svg"
            />
          </div>
          <div className={styles.antDesigninstagramFilledWrapper}>
            <img
              className={styles.antDesigninstagramFilledIcon}
              alt=""
              src="/cibfacebookf2.svg"
            />
          </div>
          <div className={styles.akarIconslinkedinFill}>
            <img
              className={styles.linkedInIcon}
              alt=""
              src="/linked-in-icon.svg"
            />
          </div>
          <div className={styles.antDesigninstagramFilledWrapper}>
            <img
              className={styles.antDesigninstagramFilledIcon}
              alt=""
              src="/akariconsyoutubefill.svg"
            />
          </div>
          <div className={styles.antDesigninstagramFilledWrapper}>
            <img
              className={styles.antDesigninstagramFilledIcon}
              alt=""
              src="/akariconstwitterfill.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation1;
