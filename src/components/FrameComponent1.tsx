import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.aboutUsWrapper, className].join(" ")}>
      <div className={styles.aboutUs}>
        <div className={styles.aboutContent}>
          <div className={styles.content}>
            <h1 className={styles.ourCreativeJourney}>
              Our Creative Journey and Vision
            </h1>
            <div className={styles.content1}>
              <div
                className={styles.goremIpsumDolor}
              >{`Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu `}</div>
              <div className={styles.content2}>
                <div className={styles.content3}>
                  <div className={styles.content4}>
                    <b className={styles.k}>3.5k</b>
                    <div
                      className={styles.dedicatedlySculptingImaginat}
                    >{`Dedicatedly sculpting imaginative visions `}</div>
                  </div>
                  <div className={styles.pointDivider} />
                  <div className={styles.content4}>
                    <b className={styles.k}>140</b>
                    <div className={styles.dedicatedlySculptingImaginat}>
                      Having successfully brought ideas to life
                    </div>
                  </div>
                </div>
                <div className={styles.storyDivider} />
                <div className={styles.content3}>
                  <div className={styles.content4}>
                    <b className={styles.k}>147</b>
                    <div className={styles.dedicatedlySculptingImaginat}>
                      Transformed into tangible success stories
                    </div>
                  </div>
                  <div className={styles.pointDivider} />
                  <div className={styles.content4}>
                    <b className={styles.k}>124</b>
                    <div
                      className={styles.dedicatedlySculptingImaginat}
                    >{`Celebrating prestigious design `}</div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              icon
              propBackgroundColor="#121518"
              propBorder="unset"
              propPadding="12px 32px"
              propWidth="unset"
              buttonHover="About Us"
              propColor="#fff"
              propMinWidth="72px"
              propTextDecoration="unset"
              propFontWeight="unset"
              propFlex="unset"
              arrowDownRight="/arrowdownright.svg"
            />
          </div>
        </div>
        <div className={styles.imageGridWrapper}>
          <div className={styles.imageGrid}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img@2x.png"
            />
            <div className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
