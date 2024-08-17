import { FunctionComponent } from "react";
import NAVIGATION2 from "../components/NAVIGATION2";
import BREADCRUMB from "../components/BREADCRUMB";
import Heading1 from "../components/Heading1";
import Service2 from "../components/Service2";
import Heading3 from "../components/Heading3";
import AwardItems from "../components/AwardItems";
import Heading2 from "../components/Heading2";
import MemberProfiles from "../components/MemberProfiles";
import FOOTER from "../components/FOOTER";
import styles from "./OurServices.module.css";

const OurServices: FunctionComponent = () => {
  return (
    <div className={styles.ourServices}>
      <NAVIGATION2
        nAVIGATIONBorderBottom="1px solid #e4e4e4"
        lOGO="/logo3@2x.png"
        quickLinksBorderBottom="unset"
        quickLinksBorderBottom1="2px solid #121518"
        quickLinksBorderBottom2="unset"
        dividerBorderRight="1px solid #e4e4e4"
        dividerOpacity="unset"
      />
      <BREADCRUMB
        propFlex="unset"
        propAlignSelf="stretch"
        propRowGap="20px"
        aboutUs="Services"
        propMarginLeft="-205px"
        propMinWidth="178px"
        ourServices="Our Services"
        propMinWidth1="109px"
        propTextDecoration="unset"
        graphic="/graphic1.svg"
      />
      <section className={styles.services}>
        <Heading1
          check="/check1.svg"
          check1="/check1.svg"
          check2="/check1.svg"
          buttonHover="About Us"
          arrowDownRight="/arrowdownright.svg"
          icon
          propBackgroundColor="#5c29dd"
          propBorder="unset"
          propPadding="12px 32px"
          propWidth="unset"
          propColor="#fff"
          propMinWidth="72px"
          propTextDecoration="unset"
          propFontWeight="unset"
          propFlex="unset"
        />
        <div className={styles.content}>
          <div className={styles.list}>
            <Service2
              icon="/icon-22.svg"
              videoProduction="video Production"
              joremIpsumDolorSitAmetConsect="Jorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Service2
              icon="/icon-21.svg"
              videoProduction="Brand Strategy"
              propAlignSelf="stretch"
              propColor="#121518"
              joremIpsumDolorSitAmetConsect="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className={styles.contentChild} />
          <div className={styles.list}>
            <Service2
              icon="/icon-41.svg"
              videoProduction="virtual Reality"
              propAlignSelf="unset"
              propColor="#5c29dd"
              joremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur ."
            />
            <Service2
              icon="/icon-6.svg"
              videoProduction="Fashion Design"
              propAlignSelf="stretch"
              propColor="#121518"
              joremIpsumDolorSitAmetConsect="Norem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className={styles.contentItem} />
        </div>
      </section>
      <section className={styles.partners}>
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/isnt-this-the-doordash-logo.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/flow.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/hourglass.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/circle.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/cursive-p.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/hourglass-1.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/flow-1.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/circle-1.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          loading="lazy"
          alt=""
          src="/m.svg"
        />
        <img
          className={styles.isntThisTheDoordashLogo}
          alt=""
          src="/hourglass-2.svg"
        />
        <img className={styles.isntThisTheDoordashLogo} alt="" src="/n.svg" />
        <img className={styles.isntThisTheDoordashLogo} alt="" src="/eye.svg" />
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
          <div className={styles.clientHeading}>
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
      <section className={styles.awards}>
        <div className={styles.outAwards}>
          <Heading3
            buttonHover="View all"
            arrowDownRight="/arrowdownright1.svg"
            icon={false}
            propBackgroundColor="unset"
            propBorder="1px solid #abb0b4"
            propPadding="10px 30px"
            propWidth="125px"
            propColor="#121518"
            propMinWidth="62px"
            propTextDecoration="none"
            propFontWeight="700"
            propFlex="unset"
          />
          <div className={styles.content1}>
            <AwardItems
              propBorderTop="unset"
              branding="Branding"
              roremIpsumDolorSitAmetConsect="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
            />
            <AwardItems
              propBorderTop="1px solid #e4e4e4"
              branding="After noon award"
              roremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
            />
            <AwardItems
              propBorderTop="1px solid #e4e4e4"
              branding="After noon award"
              roremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
            />
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className={styles.teamContent}>
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
              iMG="/img2@2x.png"
              maverickNguyen="Maverick Nguyen"
              graphicDesigner="Graphic Designer"
            />
            <div className={styles.memberProfiles}>
              <div className={styles.img}>
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
                  className={styles.majoProd2}
                  alt=""
                  src="/majo-prod-2@2x.png"
                />
              </div>
              <div className={styles.joinnyDowParent}>
                <b className={styles.joinnyDow}>Joinny Dow</b>
                <div className={styles.ceoMarketting}>CEO - Marketting</div>
              </div>
            </div>
            <MemberProfiles
              iMG="/img-12@2x.png"
              maverickNguyen="Chris Patt"
              graphicDesigner="CEM - digiNova"
            />
            <MemberProfiles
              iMG="/img-22@2x.png"
              maverickNguyen="Jack halow"
              graphicDesigner="Photographer"
            />
          </div>
        </div>
      </section>
      <FOOTER
        protagonista="pending_I7736:4022;7617:3525"
        lOGO="/logo-11@2x.png"
        propTextShadow="unset"
        infoProtagonistamx="Info@Protagonista.mx"
        mEXMID="MEX-MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved"
        fOOTERAlignSelf="stretch"
        fOOTERFlex="unset"
      />
    </div>
  );
};

export default OurServices;
