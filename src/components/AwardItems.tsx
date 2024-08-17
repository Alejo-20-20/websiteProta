import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AwardItems.module.css";

export type AwardItemsType = {
  className?: string;
  branding?: string;
  roremIpsumDolorSitAmetConsect?: string;

  /** Style props */
  propBorderTop?: CSSProperties["borderTop"];
};

const AwardItems: FunctionComponent<AwardItemsType> = ({
  className = "",
  propBorderTop,
  branding,
  roremIpsumDolorSitAmetConsect,
}) => {
  const awardItemsStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  return (
    <div
      className={[styles.awardItems, className].join(" ")}
      style={awardItemsStyle}
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

export default AwardItems;
