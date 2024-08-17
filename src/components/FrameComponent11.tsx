import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.testimonialWrapper, className].join(" ")}>
      <div className={styles.testimonial}>
        <div className={styles.heading}>
          <img className={styles.icon} alt="" src="/icon-61.svg" />
          <img className={styles.icon1} alt="" src="/icon-71@2x.png" />
        </div>
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialQuote}>
            <div className={styles.testimonialImageWrapper}>
              <div className={styles.img} />
              <div className={styles.imageDecorations}>
                <div className={styles.imageDecorationsInner}>
                  <div className={styles.frameChild} />
                </div>
                <img
                  className={styles.imageDecorationsChild}
                  loading="lazy"
                  alt=""
                  src="/frame-48096148.svg"
                />
                <div className={styles.imageDecorationsInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.imageDecorationsInner}>
                  <div className={styles.frameChild} />
                </div>
              </div>
            </div>
            <div className={styles.testimonialDetails}>
              <div className={styles.weLoveLandingfolioOurDesiParent}>
                <blockquote className={styles.weLoveLandingfolio}>
                  "We love Landingfolio! Our designers were using it for their
                  projects, so we already knew what kind of design they want."
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <b className={styles.jennyWilson}>Jenny Wilson</b>
                  <div className={styles.authorInfo}>
                    <div className={styles.emptyAuthor}>-</div>
                  </div>
                  <div className={styles.authorInfo1}>
                    <div className={styles.growerio}>Grower.io</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialQuote}>
            <div className={styles.img1} />
            <div className={styles.testimonialDetails}>
              <div className={styles.weLoveLandingfolioOurDesiParent}>
                <blockquote className={styles.weLoveLandingfolio}>
                  "We love Landingfolio! Our designers were using it for their
                  projects, so we already knew what kind of design they want."
                </blockquote>
                <div className={styles.secondTestimonialAuthor}>
                  <b className={styles.devonLane}>Devon Lane</b>
                  <div className={styles.authorInfo}>
                    <div className={styles.emptyAuthor}>-</div>
                  </div>
                  <div className={styles.secondAuthorInfo1}>
                    <div className={styles.dldesignco}>DLDesign.co</div>
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

export default FrameComponent11;
