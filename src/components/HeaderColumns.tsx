import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";
import styles from "./HeaderColumns.module.css";

export type HeaderColumnsType = {
  className?: string;
  designApp?: string;
  prop?: string;
  screen1?: string;
  workDirectlyWithYouOnUpwork?: string;
  freeForeverGetTheBasicEssentia?: string;
  unlimitedUnhostedSites?: string;
  remoteOnline?: string;
  workWithBothWeekend?: string;
  buttonHover?: string;
  arrowDownRight?: string;
  icon?: boolean;
  propBackgroundColor1?: string;
  propBorder?: string;
  propPadding?: string;
  propWidth1?: string;
  propColor9?: string;
  propMinWidth2?: string;
  propTextDecoration?: string;
  propFontWeight?: string;
  propFlex?: string;
  buttonAlignSelf?: string;
  buttonHoverDisplay?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor2?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propBorderTop?: CSSProperties["borderTop"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propColor8?: CSSProperties["color"];
};

const HeaderColumns: FunctionComponent<HeaderColumnsType> = ({
  className = "",
  propBackgroundColor,
  designApp,
  propColor,
  prop,
  propColor1,
  propMinWidth,
  screen1,
  propColor2,
  propMinWidth1,
  propWidth,
  propBorderTop,
  propColor3,
  workDirectlyWithYouOnUpwork,
  propColor4,
  freeForeverGetTheBasicEssentia,
  propColor5,
  propColor6,
  unlimitedUnhostedSites,
  propColor7,
  remoteOnline,
  propColor8,
  workWithBothWeekend,
  buttonHover,
  arrowDownRight,
  icon,
  propBackgroundColor1,
  propBorder,
  propPadding,
  propWidth1,
  propColor9,
  propMinWidth2,
  propTextDecoration,
  propFontWeight,
  propFlex,
  buttonAlignSelf,
  buttonHoverDisplay,
}) => {
  const headerColumnsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const designAppStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth,
    };
  }, [propColor1, propMinWidth]);

  const screenStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
      minWidth: propMinWidth1,
      width: propWidth,
    };
  }, [propColor2, propMinWidth1, propWidth]);

  const content2Style: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const workDirectlyWithContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const freeForeverGetContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const advancedSecurityAndContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const unlimitedUnhostedSitesContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const remoteOnlineStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const workWithBothContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  return (
    <div
      className={[styles.headerColumns, className].join(" ")}
      style={headerColumnsStyle}
    >
      <div className={styles.content}>
        <div className={styles.pricing}>
          <b className={styles.designApp} style={designAppStyle}>
            {designApp}
          </b>
          <div className={styles.time}>
            <b className={styles.b} style={bStyle}>
              {prop}
            </b>
            <div className={styles.screen} style={screenStyle}>
              {screen1}
            </div>
          </div>
        </div>
        <div className={styles.content1} style={content2Style}>
          <div
            className={styles.workDirectlyWithContainer}
            style={workDirectlyWithContainerStyle}
          >
            <ul className={styles.workDirectlyWithYouOnUpwo}>
              <li>{workDirectlyWithYouOnUpwork}</li>
            </ul>
          </div>
          <div
            className={styles.workDirectlyWithContainer}
            style={freeForeverGetContainerStyle}
          >
            <ul className={styles.workDirectlyWithYouOnUpwo}>
              <li>{freeForeverGetTheBasicEssentia}</li>
            </ul>
          </div>
          <div
            className={styles.workDirectlyWithContainer}
            style={advancedSecurityAndContainerStyle}
          >
            <ul className={styles.workDirectlyWithYouOnUpwo}>
              <li>Advanced security and performance</li>
            </ul>
          </div>
          <div
            className={styles.workDirectlyWithContainer}
            style={unlimitedUnhostedSitesContainerStyle}
          >
            <ul className={styles.workDirectlyWithYouOnUpwo}>
              <li>{unlimitedUnhostedSites}</li>
            </ul>
          </div>
          <div
            className={styles.workDirectlyWithContainer}
            style={remoteOnlineStyle}
          >
            <ul className={styles.workDirectlyWithYouOnUpwo}>
              <li>{remoteOnline}</li>
            </ul>
          </div>
          <div
            className={styles.workDirectlyWithContainer}
            style={workWithBothContainerStyle}
          >
            <ul className={styles.workDirectlyWithYouOnUpwo}>
              <li>{workWithBothWeekend}</li>
            </ul>
          </div>
        </div>
      </div>
      <Button
        icon={icon}
        propBackgroundColor={propBackgroundColor1}
        propBorder={propBorder}
        propPadding={propPadding}
        propWidth={propWidth1}
        buttonHover={buttonHover}
        propColor={propColor9}
        propMinWidth={propMinWidth2}
        propTextDecoration={propTextDecoration}
        propFontWeight={propFontWeight}
        propFlex={propFlex}
        arrowDownRight={arrowDownRight}
        buttonAlignSelf={buttonAlignSelf}
        buttonHoverDisplay={buttonHoverDisplay}
      />
    </div>
  );
};

export default HeaderColumns;
