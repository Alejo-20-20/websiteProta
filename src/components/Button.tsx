import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  icon?: boolean;
  buttonHover?: string;
  arrowDownRight?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFlex?: CSSProperties["flex"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  icon = true,
  propBackgroundColor,
  propBorder,
  propPadding,
  propWidth,
  buttonHover,
  propColor,
  propMinWidth,
  propTextDecoration,
  propFontWeight,
  propFlex,
  arrowDownRight,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      padding: propPadding,
      width: propWidth,
    };
  }, [propBackgroundColor, propBorder, propPadding, propWidth]);

  const buttonHoverStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
      flex: propFlex,
    };
  }, [propColor, propMinWidth, propTextDecoration, propFontWeight, propFlex]);

  return (
    <div className={[styles.button, className].join(" ")} style={buttonStyle}>
      <b className={styles.buttonHover} style={buttonHoverStyle}>
        {buttonHover}
      </b>
      {icon && (
        <img
          className={styles.arrowdownrightIcon}
          alt=""
          src={arrowDownRight}
        />
      )}
    </div>
  );
};

export default Button;
