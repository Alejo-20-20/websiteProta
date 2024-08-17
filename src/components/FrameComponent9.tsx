import { FunctionComponent } from "react";
import Button from "./Button";
import Profiles from "./Profiles";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.teamContainerWrapper, className].join(" ")}>
      <div className={styles.teamContainer}>
        <div className={styles.heading}>
          <h1 className={styles.ourTeam}>Our team</h1>
          <div className={styles.teamAction}>
            <Button
              icon={false}
              propBackgroundColor="unset"
              propBorder="1px solid #abb0b4"
              propPadding="10px 30px 10px 31px"
              propWidth="unset"
              buttonHover="View all"
              propColor="#121518"
              propMinWidth="62px"
              propTextDecoration="unset"
              propFontWeight="unset"
              propFlex="unset"
              arrowDownRight="/arrowdownright1.svg"
            />
          </div>
        </div>
        <div className={styles.members}>
          <Profiles iMG="/img1@2x.png" xime="Xime" networks="Networks" />
          <div className={styles.profiles}>
            <div className={styles.img}>
              <div className={styles.social}>
                <img
                  className={styles.antDesigninstagramFilledIcon}
                  alt=""
                  src="/antdesigninstagramfilled1.svg"
                />
                <img
                  className={styles.antDesigninstagramFilledIcon}
                  alt=""
                  src="/akariconspinterestfill1.svg"
                />
                <img
                  className={styles.antDesigninstagramFilledIcon}
                  alt=""
                  src="/cibfacebookf1.svg"
                />
                <img
                  className={styles.antDesigninstagramFilledIcon}
                  alt=""
                  src="/akariconslinkedinfill1.svg"
                />
              </div>
              <img
                className={styles.ferCopy1}
                alt=""
                src="/fer-copy-1@2x.png"
              />
            </div>
            <div className={styles.ferParent}>
              <b className={styles.fer}>Fer</b>
              <div className={styles.copy}>Copy</div>
            </div>
          </div>
          <Profiles
            iMG="/img-1@2x.png"
            xime="Majo"
            networks="Production department"
          />
          <Profiles iMG="/img-2@2x.png" xime="Jackie" networks="Photographer" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
