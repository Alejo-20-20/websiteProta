import { FunctionComponent } from "react";
import NAVIGATION2 from "../components/NAVIGATION2";
import BREADCRUMB from "../components/BREADCRUMB";
import PricingTableContainer from "../components/PricingTableContainer";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent4 from "../components/FrameComponent4";
import FOOTER from "../components/FOOTER";
import styles from "./PricingFAQ.module.css";

const PricingFAQ: FunctionComponent = () => {
  return (
    <div className={styles.pricingFaq}>
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
      <section className={styles.breadcrumbContainer}>
        <BREADCRUMB
          propFlex="1"
          propAlignSelf="unset"
          propRowGap="unset"
          aboutUs={`Pricing & FAQs`}
          propMarginLeft="-260.5px"
          propMinWidth="unset"
          ourServices="Pricing"
          propMinWidth1="59px"
          propTextDecoration="none"
          graphic="/graphic1.svg"
          aboutUsWidth="unset"
          aboutUsDisplay="unset"
          aboutUsMinWidth="unset"
          breadcrumbSeparatorWidth="128px"
          contentAlignSelf="stretch"
          homeFlex="1"
          ourServicesFlex="1"
        />
      </section>
      <PricingTableContainer />
      <FrameComponent16
        fAQsWidth="unset"
        fAQsFlex="1"
        fAQsBackgroundColor="#f9f8f4"
        fAQsPadding="100px 20px"
        cONTENTAlignSelf="unset"
        cONTENTWidth="850px"
      />
      <FrameComponent4
        frameSectionAlignSelf="unset"
        frameSectionWidth="1895px"
      />
      <FOOTER
        protagonista="pending_I7736:3807;7617:3525"
        lOGO="/logo-11@2x.png"
        propTextShadow="unset"
        infoProtagonistamx="Info@Protagonista.mx"
        mEXMID="MEX-MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved"
        fOOTERAlignSelf="stretch"
        fOOTERFlex="unset"
        menuPadding="0px 0px 0px"
        showProtagonistaIcon
      />
    </div>
  );
};

export default PricingFAQ;
