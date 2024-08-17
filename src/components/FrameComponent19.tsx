import { FunctionComponent } from "react";
import styles from "./FrameComponent19.module.css";

export type FrameComponent19Type = {
  className?: string;
};

const FrameComponent19: FunctionComponent<FrameComponent19Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentParent, className].join(" ")}>
      <div className={styles.content}>
        <b className={styles.theBestRunning}>
          The Best Running Shoes for Every Terrain
        </b>
        <div className={styles.datePost}>
          <div className={styles.byMaverickNguyen}>by Maverick Nguyen</div>
          <div className={styles.datePostChild} />
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
      <div className={styles.secondBlog}>
        <div className={styles.img}>
          <div className={styles.content1}>
            <b className={styles.theBestRunning}>
              The Best Running Shoes for Every Terrain
            </b>
            <div className={styles.datePost}>
              <div className={styles.byMaverickNguyen}>by Maverick Nguyen</div>
              <div className={styles.datePostItem} />
              <div className={styles.date}>
                <div className={styles.oct122023}>Oct 12, 2023</div>
              </div>
            </div>
            <div className={styles.nuncVulputateLibero1}>
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className={styles.button1}>
              <b className={styles.readMore}>Read more</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <b className={styles.theBestRunning}>
          The Best Running Shoes for Every Terrain
        </b>
        <div className={styles.datePost}>
          <div className={styles.byMaverickNguyen}>by Maverick Nguyen</div>
          <div className={styles.datePostChild} />
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

export default FrameComponent19;
