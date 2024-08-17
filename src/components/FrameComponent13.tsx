import { FunctionComponent } from "react";
import styles from "./FrameComponent13.module.css";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: FunctionComponent<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.checkParent, className].join(" ")}>
      <img
        className={styles.checkIcon}
        loading="lazy"
        alt=""
        src="/check2.svg"
      />
      <div className={styles.textParent}>
        <b className={styles.text}>Gorem ipsum dolor sit amet</b>
        <div
          className={styles.doremIpsumDolor}
        >{`Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et `}</div>
      </div>
    </div>
  );
};

export default FrameComponent13;
