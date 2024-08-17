import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./Heading2.module.css";

export type Heading2Type = {
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

const Heading2: FunctionComponent<Heading2Type> = ({
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
      <h1 className={styles.ourTeam}>Our team</h1>
      <div className={styles.teamButton}>
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
    </div>
  );
};

export default Heading2;
