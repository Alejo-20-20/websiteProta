import { FunctionComponent } from "react";
import styles from "./BlogItems.module.css";

export type BlogItemsType = {
  className?: string;
  image14?: string;
};

const BlogItems: FunctionComponent<BlogItemsType> = ({
  className = "",
  image14,
}) => {
  return (
    <div className={[styles.blogItems, className].join(" ")}>
      <img className={styles.image14Icon} alt="" src={image14} />
      <div className={styles.content}>
        <b className={styles.theBestRunning}>
          The Best Running Shoes for Every Terrain
        </b>
        <div className={styles.datePost}>
          <div className={styles.byMaverickNguyen}>by Maverick Nguyen</div>
          <div className={styles.metaSeparator} />
          <div className={styles.date}>
            <div className={styles.oct122023}>Oct 12, 2023</div>
          </div>
        </div>
        <div className={styles.nuncVulputateLibero}>
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div className={styles.button}>
          <b className={styles.readMore}>Read more</b>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
