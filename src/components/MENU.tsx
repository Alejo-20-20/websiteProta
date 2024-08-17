import { FunctionComponent } from "react";
import styles from "./MENU.module.css";

export type MENUType = {
  className?: string;
};

const MENU: FunctionComponent<MENUType> = ({ className = "" }) => {
  return (
    <div className={[styles.menu, className].join(" ")}>
      <div className={styles.link}>
        <div className={styles.menu1}>
          <h1 className={styles.home}>Home</h1>
          <div className={styles.menu2}>
            <div className={styles.showcaseFullScreen}>
              Showcase Full Screen
            </div>
            <div className={styles.showcaseParalax}>Showcase Paralax</div>
            <div className={styles.showcaseFullScreen}>
              Showcase scroll down
            </div>
          </div>
        </div>
        <div className={styles.menu1}>
          <h1 className={styles.home}>Services</h1>
          <div className={styles.menu4}>
            <div className={styles.showcaseFullScreen}>
              Showcase Full Screen
            </div>
            <div className={styles.showcaseParalax}>Showcase Paralax</div>
            <div className={styles.showcaseScrollDown1}>
              Showcase scroll down
            </div>
          </div>
        </div>
        <div className={styles.menu5}>
          <div className={styles.menu6}>
            <h1 className={styles.portfolio}>Portfolio</h1>
          </div>
        </div>
        <div className={styles.menu7}>
          <h1 className={styles.home}>page</h1>
          <div className={styles.menu8}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.faqpricing}>FAQ/Pricing</div>
            <div className={styles.blogDetail}>Blog Detail</div>
          </div>
        </div>
        <div className={styles.menu1}>
          <h1 className={styles.home}>Blog</h1>
          <div className={styles.menu10}>
            <div className={styles.showcaseFullScreen}>
              Showcase Full Screen
            </div>
            <div className={styles.showcaseParalax}>Showcase Paralax</div>
            <div className={styles.showcaseFullScreen}>
              Showcase scroll down
            </div>
          </div>
        </div>
      </div>
      <img className={styles.xIcon} loading="lazy" alt="" src="/x.svg" />
      <div className={styles.social}>
        <img
          className={styles.antDesigninstagramFilledIcon}
          loading="lazy"
          alt=""
          src="/antdesigninstagramfilled.svg"
        />
        <img
          className={styles.antDesigninstagramFilledIcon}
          loading="lazy"
          alt=""
          src="/akariconspinterestfill.svg"
        />
        <div className={styles.akarIconslinkedinFill}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/linked-in-icon.svg"
          />
        </div>
        <img
          className={styles.antDesigninstagramFilledIcon}
          loading="lazy"
          alt=""
          src="/cibfacebookf2.svg"
        />
        <img
          className={styles.antDesigninstagramFilledIcon}
          loading="lazy"
          alt=""
          src="/akariconsyoutubefill.svg"
        />
        <img
          className={styles.antDesigninstagramFilledIcon}
          loading="lazy"
          alt=""
          src="/akariconstwitterfill.svg"
        />
      </div>
      <img className={styles.xIcon1} loading="lazy" alt="" src="/x-1.svg" />
    </div>
  );
};

export default MENU;
