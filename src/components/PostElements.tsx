import { FunctionComponent } from "react";
import styles from "./PostElements.module.css";

export type PostElementsType = {
  className?: string;
  iMG?: string;
  heading7?: string;
};

const PostElements: FunctionComponent<PostElementsType> = ({
  className = "",
  iMG,
  heading7,
}) => {
  return (
    <div className={[styles.postElements, className].join(" ")}>
      <img className={styles.imgIcon} loading="lazy" alt="" src={iMG} />
      <div className={styles.text}>
        <b className={styles.heading7}>{heading7}</b>
        <div className={styles.date}>
          <div className={styles.oct122023}>Oct 12, 2023</div>
        </div>
      </div>
    </div>
  );
};

export default PostElements;
