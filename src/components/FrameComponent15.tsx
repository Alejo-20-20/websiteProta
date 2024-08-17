import { FunctionComponent } from "react";
import FeaturedProject from "./FeaturedProject";
import styles from "./FrameComponent15.module.css";

export type FrameComponent15Type = {
  className?: string;
};

const FrameComponent15: FunctionComponent<FrameComponent15Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/group-349921@2x.png"
      />
      <div className={styles.customerImageContent}>
        <FeaturedProject
          featuredProjectPadding="unset"
          iMGBackgroundColor="#5a5c5e"
          iMGBackgroundColor1="#5a5c5e"
          iMGBackgroundColor2="#5a5c5e"
        />
        <div className={styles.customerImageContentInner}>
          <div className={styles.frameGroup}>
            <div className={styles.headingParent}>
              <div className={styles.heading}>Testimonial</div>
              <div className={styles.heading1}>
                <h1 className={styles.hearFromOur}>Hear From Our customers</h1>
                <div className={styles.testimonialIconWrapper}>
                  <div className={styles.testimonialIcon}>
                    <img
                      className={styles.icon}
                      loading="lazy"
                      alt=""
                      src="/icon3.svg"
                    />
                    <img
                      className={styles.icon1}
                      loading="lazy"
                      alt=""
                      src="/icon-13@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.firstTestimonial}>
              <div className={styles.firstTestimonialContent}>
                <div className={styles.imgParent}>
                  <div className={styles.img} />
                  <div className={styles.frameContainer}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameItem} />
                    </div>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/frame-480961481.svg"
                    />
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                </div>
                <div className={styles.firstTestimonialDescription}>
                  <div className={styles.weLoveLandingfolioOurDesiParent}>
                    <blockquote className={styles.weLoveLandingfolio}>
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </blockquote>
                    <div className={styles.jennyWilsonParent}>
                      <b className={styles.jennyWilson}>Jenny Wilson</b>
                      <div className={styles.growerioContent}>
                        <div className={styles.growerioPlaceholder}>-</div>
                      </div>
                      <div className={styles.growerioContent1}>
                        <div className={styles.growerio}>Grower.io</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.firstTestimonialContent}>
                <div className={styles.img1} />
                <div className={styles.firstTestimonialDescription}>
                  <div className={styles.weLoveLandingfolioOurDesiParent}>
                    <blockquote className={styles.weLoveLandingfolio}>
                      "We love Landingfolio! Our designers were using it for
                      their projects, so we already knew what kind of design
                      they want."
                    </blockquote>
                    <div className={styles.devonLaneParent}>
                      <b className={styles.devonLane}>Devon Lane</b>
                      <div className={styles.growerioContent}>
                        <div className={styles.growerioPlaceholder}>-</div>
                      </div>
                      <div className={styles.dLDesigncoContent1}>
                        <div className={styles.dldesignco}>DLDesign.co</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent15;
