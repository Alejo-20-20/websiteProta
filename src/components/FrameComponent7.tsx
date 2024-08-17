import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactContentParent, className].join(" ")}>
      <div className={styles.contactContent}>
        <div className={styles.contactHeader}>
          <div className={styles.contactTitleParent}>
            <div className={styles.contactTitle}>
              <h1 className={styles.letsConnect}>
                <p className={styles.lets}>Let’s</p>
                <p className={styles.lets}>Connect.</p>
              </h1>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className={styles.sub}>
              We take the time to understand your business and develop a
              strategy that is tailored to your unique needs and goals.
            </div>
          </div>
          <div className={styles.socialIcons}>
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/antdesigninstagramfilled-1.svg"
            />
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/akariconspinterestfill-1.svg"
            />
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/cibfacebookf-1.svg"
            />
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/akariconslinkedinfill1.svg"
            />
            <img
              className={styles.antDesigninstagramFilledIcon}
              loading="lazy"
              alt=""
              src="/akariconstwitterfill-1.svg"
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.form1}>
              <div className={styles.yourName}>
                <div className={styles.yourName1}>Your Name</div>
                <img
                  className={styles.inputIcon}
                  alt=""
                  src="/input-icon.svg"
                />
              </div>
              <div className={styles.yourName}>
                <div className={styles.yourMail1}>Your Mail</div>
                <img
                  className={styles.inputIcon}
                  alt=""
                  src="/input-icon.svg"
                />
              </div>
              <div className={styles.yourName}>
                <div className={styles.messenger1}>Messenger</div>
                <img
                  className={styles.inputIcon}
                  alt=""
                  src="/input-icon.svg"
                />
              </div>
            </div>
            <Button
              icon
              propBackgroundColor="#f37935"
              propBorder="unset"
              propPadding="17px 32px"
              propWidth="209px"
              buttonHover=" send Message"
              propColor="#f9f8f4"
              propMinWidth="115px"
              propTextDecoration="unset"
              propFontWeight="unset"
              propFlex="1"
              arrowDownRight="/arrowdownright2.svg"
            />
            <img
              className={styles.formChild}
              loading="lazy"
              alt=""
              src="/group-34994@2x.png"
            />
          </form>
        </div>
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/group-34993@2x.png"
      />
    </section>
  );
};

export default FrameComponent7;
