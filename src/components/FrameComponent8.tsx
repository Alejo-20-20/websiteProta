import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contentWrapperWrapper, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.innerContent}>
          <div className={styles.memoriesContainer}>
            <div className={styles.content}>
              <h1 className={styles.creatingTimelessMemories}>
                Creating timeless memories
              </h1>
              <div className={styles.content1}>
                <div className={styles.weAreNot}>
                  We are not just another creative agency; we are the architects
                  of differentiation. With over 12 years of operation, we have
                  crafted unique experiences and instilled creative vision.
                </div>
                <div className={styles.values}>
                  <div className={styles.valueNames}>
                    <b className={styles.branding}>Branding</b>
                    <div className={styles.weBrandTowards}>
                      We brand towards big, practical goals and bring great
                      profits to customers
                    </div>
                  </div>
                  <div className={styles.valueNames}>
                    <b className={styles.branding}>Creative</b>
                    <div className={styles.weBrandTowards}>
                      Creativity is the source of all things, we show you
                      outstanding creative efficiency
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <Button
                  icon
                  propBackgroundColor="#5c29dd"
                  propBorder="unset"
                  propPadding="12px 32px"
                  propWidth="unset"
                  buttonHover="Explore more"
                  propColor="#fff"
                  propMinWidth="103px"
                  propTextDecoration="unset"
                  propFontWeight="unset"
                  propFlex="unset"
                  arrowDownRight="/arrowdownright.svg"
                />
                <img
                  className={styles.playcircleIcon}
                  loading="lazy"
                  alt=""
                  src="/playcircle.svg"
                />
              </div>
            </div>
            <div className={styles.img} />
          </div>
        </div>
        <div className={styles.counter}>
          <div className={styles.counterValues}>
            <b className={styles.heading}>150</b>
            <div className={styles.numbers}>
              <b className={styles.projectSuccess}>Project success</b>
            </div>
          </div>
          <div className={styles.counterValues1}>
            <div className={styles.counterValuesChild} />
          </div>
          <div className={styles.counterValues}>
            <div className={styles.feedback}>
              <b className={styles.heading}>3k</b>
            </div>
            <b className={styles.happyClient}>Happy client</b>
          </div>
          <div className={styles.counterValues1}>
            <div className={styles.counterValuesChild} />
          </div>
          <div className={styles.counterValues}>
            <b className={styles.heading2}>12</b>
            <div className={styles.yearsWrapper}>
              <b className={styles.years}>years</b>
            </div>
          </div>
          <div className={styles.counterValues1}>
            <div className={styles.counterValuesChild} />
          </div>
          <div className={styles.counterValues}>
            <b className={styles.heading}>30</b>
            <div className={styles.peopleWrapper}>
              <b className={styles.people}>People</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
