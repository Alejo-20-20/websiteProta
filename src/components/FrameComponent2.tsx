import { FunctionComponent } from "react";
import Button from "./Button";
import Heading from "./Heading";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.processContentWrapper, className].join(" ")}>
      <div className={styles.processContent}>
        <div className={styles.processDetails}>
          <div className={styles.processSteps}>
            <div className={styles.content}>
              <h1 className={styles.ourProcess}>Our Process</h1>
              <div className={styles.content1}>
                <div className={styles.stepBreakdown}>
                  <b className={styles.stepBullets}>01</b>
                  <b className={styles.branding}>Branding</b>
                  <div className={styles.horemIpsumDolor}>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className={styles.stepBreakdown1}>
                  <b className={styles.stepBullets}>02</b>
                  <b className={styles.branding}>Create</b>
                  <div className={styles.boremIpsumDolor}>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className={styles.stepBreakdown1}>
                  <b className={styles.stepBullets}>03</b>
                  <b className={styles.branding}>planning</b>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className={styles.stepBreakdown1}>
                  <b className={styles.stepBullets}>04</b>
                  <b className={styles.storytelling}>Storytelling</b>
                  <div className={styles.koremIpsumDolor}>
                    Korem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <Button
                icon
                propBackgroundColor="#121518"
                propBorder="unset"
                propPadding="12px 32px"
                propWidth="unset"
                buttonHover="Explore now"
                propColor="#fff"
                propMinWidth="98px"
                propTextDecoration="unset"
                propFontWeight="unset"
                propFlex="unset"
                arrowDownRight="/arrowdownright.svg"
              />
              <div className={styles.line}>
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
              </div>
            </div>
          </div>
          <div className={styles.img} />
        </div>
        <Heading
          showcasingOurCreativeJourney="Showcasing Our Creative Journey"
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
      </div>
    </section>
  );
};

export default FrameComponent2;
