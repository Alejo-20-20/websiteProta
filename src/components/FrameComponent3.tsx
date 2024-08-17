import { FunctionComponent } from "react";
import IMG from "./IMG";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.imgParent, className].join(" ")}>
      <div className={styles.img} />
      <div className={styles.galleryImages}>
        <IMG soremIpsumDolorSitAmetConsect="Sorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
      <div className={styles.img1} />
      <div className={styles.img2} />
    </section>
  );
};

export default FrameComponent3;
