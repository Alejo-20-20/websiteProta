import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IMG.module.css";

export type IMGType = {
  className?: string;
  soremIpsumDolorSitAmetConsect?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinHeight?: CSSProperties["minHeight"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
};

const IMG: FunctionComponent<IMGType> = ({
  className = "",
  propFlex,
  propMinHeight,
  propPadding,
  propMinWidth,
  propPadding1,
  soremIpsumDolorSitAmetConsect,
}) => {
  const iMGStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinHeight, propPadding, propMinWidth]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={[styles.img, className].join(" ")} style={iMGStyle}>
      <div className={styles.content} style={contentStyle}>
        <div className={styles.icon}>
          <img
            className={styles.arrowcircleuprightIcon}
            loading="lazy"
            alt=""
            src="/arrowcircleupright.svg"
          />
        </div>
        <div className={styles.imageCaption}>
          <b className={styles.fashionLookbook}>Fashion Lookbook</b>
          <div className={styles.soremIpsumDolor}>
            {soremIpsumDolorSitAmetConsect}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMG;
