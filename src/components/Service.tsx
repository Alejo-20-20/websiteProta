import { FunctionComponent } from "react";
import styles from "./Service.module.css";

export type ServiceType = {
  className?: string;
  icon?: string;
  brandStrategy?: string;
  soremIpsumDolorSitAmetConsect?: string;
};

const Service: FunctionComponent<ServiceType> = ({
  className = "",
  icon,
  brandStrategy,
  soremIpsumDolorSitAmetConsect,
}) => {
  return (
    <div className={[styles.service, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.content}>
        <b className={styles.brandStrategy}>{brandStrategy}</b>
        <div className={styles.soremIpsumDolor}>
          {soremIpsumDolorSitAmetConsect}
        </div>
      </div>
    </div>
  );
};

export default Service;
