import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.testimonialWrapper, className].join(" ")}>
      <div className={styles.testimonial}>
        <div className={styles.content}>
          <div className={styles.testimonialNavigation}>
            <div className={styles.icon}>
              <img
                className={styles.arrowcirclerightIcon}
                alt=""
                src="/arrowcircleright-1.svg"
              />
            </div>
          </div>
          <b className={styles.workingWithProtagonista}>
            Working with Protagonista was an absolute delight. Their team's
            dedication to creativity and attention to detail is truly
            commendable. They transformed our vision into visual masterpieces
            that exceeded our expectations. The professionalism and passion they
            brought to the table made the entire experience memorable.
          </b>
          <div className={styles.testimonialNavigation}>
            <div className={styles.icon1}>
              <img
                className={styles.arrowcirclerightIcon1}
                alt=""
                src="/arrowcircleright-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.author}>
          <b className={styles.sarahWilliams}>
            Sarah Williams - CEO of SparkTech Solutions
          </b>
        </div>
        <div className={styles.authorImage}>
          <div className={styles.authorImageChild} />
          <img className={styles.icon2} alt="" src="/icon-8.svg" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
