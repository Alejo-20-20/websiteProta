import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service2.module.css";

export type Service2Type = {
  className?: string;
  icon?: string;
  videoProduction?: string;
  joremIpsumDolorSitAmetConsect?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
};

const Service2: FunctionComponent<Service2Type> = ({
  className = "",
  icon,
  videoProduction,
  propAlignSelf,
  propColor,
  joremIpsumDolorSitAmetConsect,
}) => {
  const videoProduction1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      color: propColor,
    };
  }, [propAlignSelf, propColor]);

  return (
    <div className={[styles.service, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.content}>
        <b className={styles.videoProduction} style={videoProduction1Style}>
          {videoProduction}
        </b>
        <div className={styles.joremIpsumDolor}>
          {joremIpsumDolorSitAmetConsect}
        </div>
      </div>
    </div>
  );
};

export default Service2;
