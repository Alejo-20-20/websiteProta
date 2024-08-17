import { FunctionComponent } from "react";
import Heading from "./Heading";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.blogHeaderWrapper, className].join(" ")}>
      <div className={styles.blogHeader}>
        <Heading
          showcasingOurCreativeJourney="Our Blog Space"
          propHeight="unset"
          propWidth="unset"
          buttonHover="View all"
          arrowDownRight="/arrowdownright1.svg"
          icon={false}
          propBackgroundColor="unset"
          propBorder="1px solid #abb0b4"
          propPadding="10px 30px 10px 31px"
          propWidth1="unset"
          propColor="#121518"
          propMinWidth="62px"
          propTextDecoration="none"
          propFontWeight="700"
          propFlex="unset"
        />
        <div className={styles.list}>
          <div className={styles.postList}>
            <div className={styles.img} />
            <div className={styles.content}>
              <b className={styles.theBestRunning}>
                The Best Running Shoes for Every Terrain
              </b>
              <div className={styles.datePost}>
                <div className={styles.byMaverickNguyenContainer}>
                  <span>{`by `}</span>
                  <span className={styles.maverickNguyen}>Maverick Nguyen</span>
                </div>
                <div className={styles.metadataDivider} />
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
          <div className={styles.postList}>
            <div className={styles.img} />
            <div className={styles.content}>
              <b className={styles.theBestRunning}>
                The Best Running Shoes for Every Terrain
              </b>
              <div className={styles.datePost}>
                <div className={styles.byMaverickNguyenContainer}>
                  <span>{`by `}</span>
                  <span className={styles.maverickNguyen}>Maverick Nguyen</span>
                </div>
                <div className={styles.metadataDivider} />
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
          <div className={styles.postList}>
            <div className={styles.img} />
            <div className={styles.content}>
              <b className={styles.theBestRunning}>
                The Best Running Shoes for Every Terrain
              </b>
              <div className={styles.datePost}>
                <div className={styles.byMaverickNguyenContainer}>
                  <span>{`by `}</span>
                  <span className={styles.maverickNguyen}>Maverick Nguyen</span>
                </div>
                <div className={styles.metadataDivider} />
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
          <div className={styles.postList}>
            <div className={styles.img} />
            <div className={styles.content}>
              <b className={styles.theBestRunning}>
                The Best Running Shoes for Every Terrain
              </b>
              <div className={styles.datePost}>
                <div className={styles.byMaverickNguyenContainer}>
                  <span>{`by `}</span>
                  <span className={styles.maverickNguyen}>Maverick Nguyen</span>
                </div>
                <div className={styles.metadataDivider} />
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
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
