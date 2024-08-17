import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CallUs.module.css";

export type CallUsType = {
  className?: string;
  phone?: string;
  callUs?: string;
  infoValues?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const CallUs: FunctionComponent<CallUsType> = ({
  className = "",
  phone,
  callUs,
  propMinWidth,
  infoValues,
  propDisplay,
  propMinWidth1,
}) => {
  const callUsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const infoValuesStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className={[styles.callUs, className].join(" ")}>
      <div className={styles.detailIcons}>
        <img className={styles.phoneIcon} loading="lazy" alt="" src={phone} />
      </div>
      <div className={styles.detailDividers} />
      <div className={styles.content}>
        <b className={styles.callUs1} style={callUsStyle}>
          {callUs}
        </b>
        <div className={styles.infoValues} style={infoValuesStyle}>
          {infoValues}
        </div>
      </div>
    </div>
  );
};

export default CallUs;
