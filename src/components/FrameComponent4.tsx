import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.newsletterContentWrapper, className].join(" ")}>
      <div className={styles.newsletterContent}>
        <div className={styles.subscriptionForm}>
          <h1 className={styles.subscribesToOur}>
            Subscribes to our newsletter
          </h1>
          <div className={styles.subscriptionDescription}>
            <div className={styles.subscribeToOur}>
              Subscribe to our newsletter to receive the latest updates,
              insights, and trends from the world of creativity, design, and
              innovation
            </div>
          </div>
        </div>
        <div className={styles.inputFields}>
          <div className={styles.form}>
            <div className={styles.emailField}>
              <div className={styles.yourEmail}>Your email</div>
            </div>
            <img
              className={styles.arrowcirclerightIcon}
              alt=""
              src="/arrowcircleright-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
