import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AwardItem.module.css";

export type AwardItemType = {
  className?: string;
  branding?: string;
  roremIpsumDolorSitAmetConsect?: string;

  /** Style props */
  propBorderTop?: CSSProperties["borderTop"];
};

const AwardItem: FunctionComponent<AwardItemType> = ({
  className = "",
  propBorderTop,
  branding,
  roremIpsumDolorSitAmetConsect,
}) => {
  const awardItemStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <div
      className={[styles.awardItem, className].join(" ")}
      style={awardItemStyle}
    >
      <b className={styles.branding}>{branding}</b>
      <b className={styles.october6th2023}>October 6th, 2023</b>
      <div className={styles.roremIpsumDolor}>
        {roremIpsumDolorSitAmetConsect}
      </div>
      <img
        className={styles.arrowcirclerightIcon}
        loading="lazy"
        alt=""
        src="/arrowcircleright-1.svg"
      />
    </div>
  );
};

export default AwardItem;
