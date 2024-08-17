import { FunctionComponent } from "react";
import styles from "./FeaturesRow.module.css";

export type FeaturesRowType = {
  className?: string;
  featureLabel?: string;
  featureLabel1?: string;
  featureLabel2?: string;
};

const FeaturesRow: FunctionComponent<FeaturesRowType> = ({
  className = "",
  featureLabel,
  featureLabel1,
  featureLabel2,
}) => {
  return (
    <div className={[styles.featuresRow, className].join(" ")}>
      <div className={styles.featureItem}>
        <img
          className={styles.checkIcon}
          loading="lazy"
          alt=""
          src="/check.svg"
        />
        <b className={styles.featureLabel}>{featureLabel}</b>
      </div>
      <div className={styles.featureItem}>
        <img className={styles.checkIcon} alt="" src="/check.svg" />
        <b className={styles.featureLabel}>{featureLabel1}</b>
      </div>
      <div className={styles.featureItem}>
        <img className={styles.checkIcon} alt="" src="/check.svg" />
        <b className={styles.featureLabel}>{featureLabel2}</b>
      </div>
    </div>
  );
};

export default FeaturesRow;
