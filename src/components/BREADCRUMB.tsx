import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BREADCRUMB.module.css";

export type BREADCRUMBType = {
  className?: string;
  aboutUs?: string;
  ourServices?: string;
  graphic?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propRowGap?: CSSProperties["rowGap"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const BREADCRUMB: FunctionComponent<BREADCRUMBType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  propRowGap,
  aboutUs,
  propMarginLeft,
  propMinWidth,
  ourServices,
  propMinWidth1,
  propTextDecoration,
  graphic,
}) => {
  const bREADCRUMBStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      rowGap: propRowGap,
    };
  }, [propFlex, propAlignSelf, propRowGap]);

  const breadcrumbSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      minWidth: propMinWidth,
    };
  }, [propMarginLeft, propMinWidth]);

  const ourServicesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      textDecoration: propTextDecoration,
    };
  }, [propMinWidth1, propTextDecoration]);

  return (
    <div
      className={[styles.breadcrumb, className].join(" ")}
      style={bREADCRUMBStyle}
    >
      <h1 className={styles.aboutUs}>{aboutUs}</h1>
      <div
        className={styles.breadcrumbSeparator}
        style={breadcrumbSeparatorStyle}
      >
        <div className={styles.content}>
          <a className={styles.home}>Home</a>
          <div className={styles.titleSegments}>/</div>
          <div className={styles.ourServices} style={ourServicesStyle}>
            {ourServices}
          </div>
        </div>
      </div>
      <img className={styles.graphicIcon} alt="" src={graphic} />
    </div>
  );
};

export default BREADCRUMB;
