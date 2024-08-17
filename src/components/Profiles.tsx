import { FunctionComponent } from "react";
import styles from "./Profiles.module.css";

export type ProfilesType = {
  className?: string;
  iMG?: string;
  xime?: string;
  networks?: string;
};

const Profiles: FunctionComponent<ProfilesType> = ({
  className = "",
  iMG,
  xime,
  networks,
}) => {
  return (
    <div className={[styles.profiles, className].join(" ")}>
      <img className={styles.imgIcon} alt="" src={iMG} />
      <div className={styles.ferName}>
        <b className={styles.xime}>{xime}</b>
        <div className={styles.networks}>{networks}</div>
      </div>
    </div>
  );
};

export default Profiles;
