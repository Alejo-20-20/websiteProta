import { FunctionComponent } from "react";
import Button from "./Button";
import BlogItems from "./BlogItems";
import styles from "./FrameComponent12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.blogHeaderWrapper, className].join(" ")}>
      <div className={styles.blogHeader}>
        <div className={styles.heading}>
          <h1 className={styles.ourBlogSpace}>Our Blog Space</h1>
          <div className={styles.blogButtonWrapper}>
            <Button
              icon={false}
              propBackgroundColor="unset"
              propBorder="1px solid #abb0b4"
              propPadding="10px 30px 10px 31px"
              propWidth="unset"
              buttonHover="View all"
              propColor="#121518"
              propMinWidth="62px"
              propTextDecoration="unset"
              propFontWeight="unset"
              propFlex="unset"
              arrowDownRight="/arrowdownright1.svg"
            />
          </div>
        </div>
        <div className={styles.blogPosts}>
          <BlogItems image14="/image-14@2x.png" />
          <div className={styles.img}>
            <div className={styles.content}>
              <b className={styles.theBestRunning}>
                The Best Running Shoes for Every Terrain
              </b>
              <div className={styles.datePost}>
                <div className={styles.byMaverickNguyen}>
                  by Maverick Nguyen
                </div>
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
            <div className={styles.footerCopyright}>
              <div className={styles.protagonistamxAllRights}>
                ©2024 “Protagonista.mx” All Rights Reserved
              </div>
              <div className={styles.protagonistamxAllRights1}>
                ©2024 “Protagonista.mx” All Rights Reserved
              </div>
            </div>
          </div>
          <BlogItems image14="/image-14@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
