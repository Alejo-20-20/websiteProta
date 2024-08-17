import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./Heading3.module.css";

export type Heading3Type = {
  className?: string;
  buttonHover?: string;
  arrowDownRight?: string;
  icon?: boolean;
  propBackgroundColor?: string;
  propBorder?: string;
  propPadding?: string;
  propWidth?: string;
  propColor?: string;
  propMinWidth?: string;
  propTextDecoration?: string;
  propFontWeight?: string;
  propFlex?: string;
};

const Heading3: FunctionComponent<Heading3Type> = ({
  className = "",
  buttonHover,
  arrowDownRight,
  icon,
  propBackgroundColor,
  propBorder,
  propPadding,
  propWidth,
  propColor,
  propMinWidth,
  propTextDecoration,
  propFontWeight,
  propFlex,
}) => {
  return (
    <div className={[styles.heading, className].join(" ")}>
      <div className={styles.awardsTitleWrapper}>
        <h1 className={styles.exploreOurAwards}>Explore our awards</h1>
      </div>
      <Button
        icon={icon}
        propBackgroundColor={propBackgroundColor}
        propBorder={propBorder}
        propPadding={propPadding}
        propWidth={propWidth}
        buttonHover={buttonHover}
        propColor={propColor}
        propMinWidth={propMinWidth}
        propTextDecoration={propTextDecoration}
        propFontWeight={propFontWeight}
        propFlex={propFlex}
        arrowDownRight={arrowDownRight}
      />
    </div>
  );
};

export default Heading3;
