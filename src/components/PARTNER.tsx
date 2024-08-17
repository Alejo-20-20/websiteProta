import { FunctionComponent } from "react";
import styles from "./PARTNER.module.css";

export type PARTNERType = {
  className?: string;
};

const PARTNER: FunctionComponent<PARTNERType> = ({ className = "" }) => {
  return (
    <section className={[styles.partner, className].join(" ")}>
      <b className={styles.theWorldsLeading}>
        The world's leading companies trust Protagonista
      </b>
      <div className={styles.partner1}>
        <div className={styles.logo}>
          <img
            className={styles.logoChild}
            loading="lazy"
            alt=""
            src="/group-34983.svg"
          />
        </div>
        <div className={styles.logo1}>
          <img
            className={styles.logoItem}
            loading="lazy"
            alt=""
            src="/group-34987.svg"
          />
        </div>
        <div className={styles.slack}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <div className={styles.logo2}>
          <img
            className={styles.logoInner}
            loading="lazy"
            alt=""
            src="/group-34982.svg"
          />
        </div>
        <div className={styles.logo3}>
          <img
            className={styles.spotifyIcon}
            loading="lazy"
            alt=""
            src="/spotify.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default PARTNER;
