import { FunctionComponent } from "react";
import CallUs from "./CallUs";
import Button from "./Button";
import styles from "./FrameComponent20.module.css";

export type FrameComponent20Type = {
  className?: string;
};

const FrameComponent20: FunctionComponent<FrameComponent20Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactWrapperWrapper, className].join(" ")}>
      <div className={styles.contactWrapper}>
        <div className={styles.contact}>
          <h1 className={styles.getInTouch}>Get In touch</h1>
          <div className={styles.info}>
            <CallUs
              phone="/phone1.svg"
              callUs="Call Us"
              infoValues="123 456 7890"
            />
            <CallUs
              phone="/envelopesimple1.svg"
              callUs="Email"
              propMinWidth="64px"
              infoValues="hi.avitex@gmail.com"
              propDisplay="unset"
              propMinWidth1="unset"
            />
            <div className={styles.address}>
              <div className={styles.mappinlineWrapper}>
                <img
                  className={styles.mappinlineIcon}
                  loading="lazy"
                  alt=""
                  src="/mappinline.svg"
                />
              </div>
              <div className={styles.addressChild} />
              <div className={styles.content}>
                <b className={styles.address1}>Address</b>
                <div className={styles.parkerRdAllentown}>
                  4140 Parker Rd. Allentown, New Mexico 31134
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formFields}>
            <div className={styles.row}>
              <div className={styles.inputWithLabel}>
                <b className={styles.firstName}>First Name:</b>
                <div className={styles.input}>
                  <div className={styles.nameInputTypes}>Tony Nguyen|</div>
                </div>
              </div>
              <div className={styles.inputWithLabel}>
                <b className={styles.firstName}>Last Name:</b>
                <div className={styles.input1}>
                  <div className={styles.phoneNumber}>Last name</div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputWithLabel}>
                <b className={styles.firstName}>Email Address:</b>
                <div className={styles.input1}>
                  <div className={styles.text}>example@company.com</div>
                </div>
              </div>
              <div className={styles.inputWithLabel}>
                <b className={styles.firstName}>Phone Number:</b>
                <div className={styles.input3}>
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownText}>US</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                  <div className={styles.text1}>+1 (555) 000-0000</div>
                </div>
              </div>
            </div>
            <div className={styles.inputWithLabel}>
              <b className={styles.subject}>Subject</b>
              <div className={styles.input4}>
                <div className={styles.phoneNumber}>Include a message...</div>
              </div>
            </div>
          </div>
          <Button
            icon
            propBackgroundColor="#5c29dd"
            propBorder="unset"
            propPadding="12px 32px"
            propWidth="unset"
            buttonHover="Send message"
            propColor="#fff"
            propMinWidth="113px"
            propTextDecoration="unset"
            propFontWeight="unset"
            propFlex="unset"
            arrowDownRight="/arrowdownright.svg"
            buttonAlignSelf="unset"
            buttonHoverDisplay="inline-block"
          />
          <div className={styles.formBackground}>
            <div className={styles.backgroundShape}>
              <div className={styles.shape} />
            </div>
            <div className={styles.text2}>
              {`I agree that my submitted data is `}
              <span className={styles.collectedAndStored}>
                collected and stored
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FrameComponent20;
