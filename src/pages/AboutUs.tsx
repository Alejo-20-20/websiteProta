import { FunctionComponent } from "react";
import FrameComponent17 from "../components/FrameComponent17";
import Button from "../components/Button";
import Heading2 from "../components/Heading2";
import MemberProfiles from "../components/MemberProfiles";
import FrameComponent18 from "../components/FrameComponent18";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <FrameComponent17 />
      <section className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <h1 className={styles.creatingTimelessMemories}>
              Creating timeless memories
            </h1>
            <div className={styles.content1}>
              <div
                className={styles.goremIpsumDolor}
              >{`Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu `}</div>
              <div className={styles.content2}>
                <div className={styles.brandingItems}>
                  <b className={styles.branding}>Branding</b>
                  <div className={styles.horemIpsumDolor}>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className={styles.brandingItems}>
                  <b className={styles.branding}>Create</b>
                  <div className={styles.horemIpsumDolor}>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
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
      </section>
      <section className={styles.counter}>
        <div className={styles.counterItems}>
          <b className={styles.heading}>150</b>
          <div className={styles.counterValues}>
            <b className={styles.projectSuccess}>Project success</b>
          </div>
        </div>
        <div className={styles.counterItems1}>
          <div className={styles.line} />
        </div>
        <div className={styles.counterItems}>
          <div className={styles.clientWrapper}>
            <b className={styles.heading}>3k</b>
          </div>
          <b className={styles.happyClient}>Happy client</b>
        </div>
        <div className={styles.counterItems1}>
          <div className={styles.line} />
        </div>
        <div className={styles.counterItems}>
          <b className={styles.heading2}>12</b>
          <div className={styles.yearsWrapper}>
            <b className={styles.years}>years</b>
          </div>
        </div>
        <div className={styles.counterItems1}>
          <div className={styles.line} />
        </div>
        <div className={styles.counterItems}>
          <b className={styles.heading}>30</b>
          <div className={styles.peopleWrapper}>
            <b className={styles.people}>People</b>
          </div>
        </div>
      </section>
      <section className={styles.teamWrapperWrapper}>
        <div className={styles.teamWrapper}>
          <Heading2
            buttonHover="View all"
            arrowDownRight="/arrowdownright1.svg"
            icon={false}
            propBackgroundColor="unset"
            propBorder="1px solid #abb0b4"
            propPadding="10px 30px 10px 31px"
            propWidth="unset"
            propColor="#121518"
            propMinWidth="62px"
            propTextDecoration="none"
            propFontWeight="700"
            propFlex="unset"
          />
          <div className={styles.teamMembers}>
            <MemberProfiles
              iMG="/img3@2x.png"
              maverickNguyen="Javi"
              graphicDesigner="Graphic Designer"
            />
            <div className={styles.memberProfiles}>
              <div className={styles.img1}>
                <div className={styles.social}>
                  <img
                    className={styles.antDesigninstagramFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/antdesigninstagramfilled11.svg"
                  />
                  <img
                    className={styles.antDesigninstagramFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/akariconspinterestfill11.svg"
                  />
                  <img
                    className={styles.antDesigninstagramFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/cibfacebookf1.svg"
                  />
                  <img
                    className={styles.antDesigninstagramFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/akariconslinkedinfill11.svg"
                  />
                </div>
                <img
                  className={styles.marferProta1}
                  alt=""
                  src="/marfer-prota-1@2x.png"
                />
              </div>
              <div className={styles.maferParent}>
                <b className={styles.mafer}>Mafer</b>
                <div className={styles.ceoMarketting}>CEO - Marketting</div>
              </div>
            </div>
            <MemberProfiles
              iMG="/img-13@2x.png"
              maverickNguyen="Vic"
              graphicDesigner="CEM - digiNova"
            />
            <MemberProfiles
              iMG="/img-23@2x.png"
              maverickNguyen="Leti"
              graphicDesigner="Photographer"
            />
          </div>
        </div>
      </section>
      <FrameComponent18 />
    </div>
  );
};

export default AboutUs;
