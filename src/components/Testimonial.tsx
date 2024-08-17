import { FunctionComponent } from "react";
import styles from "./Testimonial.module.css";

export type TestimonialType = {
  className?: string;
};

const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <div className={styles.testimonialContent}>
        <img
          className={styles.graphicIcon}
          loading="lazy"
          alt=""
          src="/graphic-2@2x.png"
        />
        <div className={styles.testimonial1}>
          <div className={styles.heading}>what client say?</div>
          <div className={styles.testimonialDetails}>
            <div className={styles.quote}>
              <h1 className={styles.protagonistaTransformedOurContainer}>
                <span>"Protagonista</span>
                <span className={styles.transformedOurBrand}>
                  {" "}
                  transformed our brand from ordinary to extraordinary
                </span>
                <span>”</span>
              </h1>
              <div className={styles.author}>
                <b className={styles.henryLee}>Henry Lee</b>
                <div className={styles.digitalMarketingManager}>
                  Digital Marketing Manager at NexusTech Solutions
                </div>
              </div>
            </div>
            <div className={styles.testimonialImages}>
              <img
                className={styles.imgIcon}
                loading="lazy"
                alt=""
                src="/img1@2x.png"
              />
              <div className={styles.caretrightParent}>
                <img
                  className={styles.caretrightIcon}
                  loading="lazy"
                  alt=""
                  src="/caretright.svg"
                />
                <img
                  className={styles.imgIcon1}
                  loading="lazy"
                  alt=""
                  src="/img-11@2x.png"
                />
              </div>
              <img
                className={styles.imgIcon}
                loading="lazy"
                alt=""
                src="/img-21@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
