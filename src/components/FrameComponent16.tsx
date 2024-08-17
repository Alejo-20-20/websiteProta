import { FunctionComponent } from "react";
import styles from "./FrameComponent16.module.css";

export type FrameComponent16Type = {
  className?: string;
};

const FrameComponent16: FunctionComponent<FrameComponent16Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.faqsWrapper, className].join(" ")}>
      <div className={styles.faqs}>
        <h1 className={styles.seamlessIntegration}>
          Get Started with Our Easy Setup Process
        </h1>
        <div className={styles.content}>
          <div className={styles.faqs1}>
            <b className={styles.howDoesAi}>
              How does AI Generation Create Image work?
            </b>
            <img className={styles.icon} alt="" src="/icon-23.svg" />
          </div>
          <div className={styles.faqs2}>
            <div className={styles.expandedFAQHeader}>
              <b className={styles.howDoesAi}>
                What is AI Generation Create Image?
              </b>
              <img className={styles.icon} alt="" src="/icon-31.svg" />
            </div>
            <div className={styles.aiGenerationCreate}>
              AI Generation Create Image is an advanced technology that utilizes
              Artificial Intelligence (AI) algorithms to automatically generate
              high-quality, realistic images.
            </div>
          </div>
          <div className={styles.faqs3}>
            <b className={styles.howDoesAi}>
              Can AI-generated images match human-created art?
            </b>
            <img className={styles.icon} alt="" src="/icon-23.svg" />
          </div>
          <div className={styles.faqs3}>
            <b className={styles.howDoesAi}>
              What are the applications of AI Generation Create Image?
            </b>
            <img className={styles.icon} alt="" src="/icon-23.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
