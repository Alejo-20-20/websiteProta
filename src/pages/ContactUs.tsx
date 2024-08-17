import { FunctionComponent } from "react";
import NAVIGATION2 from "../components/NAVIGATION2";
import BREADCRUMB from "../components/BREADCRUMB";
import FrameComponent20 from "../components/FrameComponent20";
import FOOTER from "../components/FOOTER";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <NAVIGATION2
        nAVIGATIONBorderBottom="1px solid #e4e4e4"
        lOGO="/logo3@2x.png"
        quickLinksBorderBottom="unset"
        quickLinksBorderBottom1="unset"
        quickLinksBorderBottom2="2px solid #121518"
        dividerBorderRight="1px solid #e4e4e4"
        dividerOpacity="unset"
        quickLinksBorderBottom3="unset"
      />
      <section className={styles.breadcrumbWrapper}>
        <BREADCRUMB
          propFlex="1"
          propAlignSelf="unset"
          propRowGap="unset"
          aboutUs="Contact Us"
          propMarginLeft="-234px"
          propMinWidth="unset"
          ourServices="Contact Us"
          propMinWidth1="96px"
          propTextDecoration="unset"
          graphic="/graphic1.svg"
          aboutUsWidth="unset"
          aboutUsDisplay="unset"
          aboutUsMinWidth="unset"
          breadcrumbSeparatorWidth="unset"
          contentAlignSelf="unset"
          homeFlex="unset"
          ourServicesFlex="unset"
        />
      </section>
      <FrameComponent20 />
      <section className={styles.map} />
      <FOOTER
        protagonista="pending_I7736:3733;7617:3525"
        lOGO="/logo-11@2x.png"
        propTextShadow="unset"
        infoProtagonistamx="Info@Protagonista.mx"
        mEXMID="MEX-MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved"
        fOOTERAlignSelf="stretch"
        fOOTERFlex="unset"
        menuPadding="unset"
        showProtagonistaIcon={false}
      />
    </div>
  );
};

export default ContactUs;
