import { FunctionComponent } from "react";
import FrameComponent13 from "./FrameComponent13";
import Button from "./Button";
import styles from "./FrameComponent14.module.css";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: FunctionComponent<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.portfolioDetailInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.januaryHeadingContentParent}>
          <div className={styles.januaryHeadingContent}>
            <div className={styles.january6th2024}>january 6th, 2024</div>
          </div>
          <h1 className={styles.mountantIllustration}>mountant Illustration</h1>
          <div className={styles.januaryHeadingContent1}>
            <div className={styles.heading}>Polygon- Illustration</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.consolidationHeadingContent}>
            <div className={styles.heading1}>HOw we made it</div>
            <h1 className={styles.theValuesDriving}>
              The values driving our culture
            </h1>
          </div>
          <div className={styles.div}>
            <div className={styles.contentImageContainer}>
              <div className={styles.yoremIpsumDolor}>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </div>
              <div className={styles.frameGroup}>
                <FrameComponent13 />
                <FrameComponent13 />
                <div className={styles.checkParent}>
                  <img
                    className={styles.checkIcon}
                    loading="lazy"
                    alt=""
                    src="/check2.svg"
                  />
                  <div className={styles.textParent}>
                    <b className={styles.text}>Gorem ipsum dolor sit amet</b>
                    <div
                      className={styles.doremIpsumDolor}
                    >{`Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.consolidationHeadingContent1}>
            <b className={styles.aCloserLook}>
              A closer look at one critical consolidation
            </b>
            <div className={styles.yoremIpsumDolor1}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.Yorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
              efficitur neque.
            </div>
          </div>
          <div className={styles.consolidationHeadingContent1}>
            <b className={styles.aCloserLook}>{`The power of scale in M&A`}</b>
            <div className={styles.yoremIpsumDolor1}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.Yorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
              efficitur neque.
            </div>
          </div>
        </div>
        <div className={styles.heading2}>
          <h1 className={styles.showcasingOurCreative}>
            Showcasing Our Creative Journey
          </h1>
          <div className={styles.buttonWrapper}>
            <Button
              icon={false}
              propBackgroundColor="unset"
              propBorder="1px solid #abb0b4"
              propPadding="10px 30px 10px 31px"
              propWidth="unset"
              buttonHover="View all"
              propColor="#fff"
              propMinWidth="62px"
              propTextDecoration="none"
              propFontWeight="700"
              propFlex="unset"
              arrowDownRight="/arrowdownright1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent14;
