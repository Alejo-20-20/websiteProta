import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";
import styles from "./Heading.module.css";

export type HeadingType = {
  className?: string;
  showcasingOurCreativeJourney?: string;
  buttonHover?: string;
  arrowDownRight?: string;
  icon?: boolean;
  propBackgroundColor?: string;
  propBorder?: string;
  propPadding?: string;
  propWidth1?: string;
  propColor?: string;
  propMinWidth?: string;
  propTextDecoration?: string;
  propFontWeight?: string;
  propFlex?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const Heading: FunctionComponent<HeadingType> = ({
  className = "",
  showcasingOurCreativeJourney,
  propHeight,
  propWidth,
  buttonHover,
  arrowDownRight,
  icon,
  propBackgroundColor,
  propBorder,
  propPadding,
  propWidth1,
  propColor,
  propMinWidth,
  propTextDecoration,
  propFontWeight,
  propFlex,
}) => {
  const showcasingOurCreativeStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={[styles.heading, className].join(" ")}>
      <h1
        className={styles.showcasingOurCreative}
        style={showcasingOurCreativeStyle}
      >
        {showcasingOurCreativeJourney}
      </h1>
      <div className={styles.portfolioButtonWrapper}>
        <Button
          icon={icon}
          propBackgroundColor={propBackgroundColor}
          propBorder={propBorder}
          propPadding={propPadding}
          propWidth={propWidth1}
          buttonHover={buttonHover}
          propColor={propColor}
          propMinWidth={propMinWidth}
          propTextDecoration={propTextDecoration}
          propFontWeight={propFontWeight}
          propFlex={propFlex}
          arrowDownRight={arrowDownRight}
        />
      </div>
    </div>
  );
};

export default Heading;
