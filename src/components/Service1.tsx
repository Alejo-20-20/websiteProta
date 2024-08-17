import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service1.module.css";

export type Service1Type = {
  className?: string;
  icon?: string;
  videoProduction?: string;
  joremIpsumDolorSitAmetConsect?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
};

const Service1: FunctionComponent<Service1Type> = ({
  className = "",
  icon,
  videoProduction,
  propAlignSelf,
  propColor,
  joremIpsumDolorSitAmetConsect,
}) => {
  const videoProductionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      color: propColor,
    };
  }, [propAlignSelf, propColor]);

  return (
    <div className={[styles.service, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.content}>
        <b className={styles.videoProduction} style={videoProductionStyle}>
          {videoProduction}
        </b>
        <div className={styles.joremIpsumDolor}>
          {joremIpsumDolorSitAmetConsect}
        </div>
      </div>
    </div>
  );
};

export default Service1;
