import { FunctionComponent } from "react";
import styles from "./MemberProfiles.module.css";

export type MemberProfilesType = {
  className?: string;
  iMG?: string;
  maverickNguyen?: string;
  graphicDesigner?: string;
};

const MemberProfiles: FunctionComponent<MemberProfilesType> = ({
  className = "",
  iMG,
  maverickNguyen,
  graphicDesigner,
}) => {
  return (
    <div className={[styles.memberProfiles, className].join(" ")}>
      <img className={styles.imgIcon} alt="" src={iMG} />
      <div className={styles.memberDetails}>
        <b className={styles.maverickNguyen}>{maverickNguyen}</b>
        <div className={styles.graphicDesigner}>{graphicDesigner}</div>
      </div>
    </div>
  );
};

export default MemberProfiles;
