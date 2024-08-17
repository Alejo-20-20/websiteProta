import { FunctionComponent } from "react";
import NAVIGATION2 from "../components/NAVIGATION2";
import BreadcrumbContainer from "../components/BreadcrumbContainer";
import MainContent from "../components/MainContent";
import Heading3 from "../components/Heading3";
import AwardItems from "../components/AwardItems";
import FrameComponent16 from "../components/FrameComponent16";
import FOOTER from "../components/FOOTER";
import styles from "./ServicesDetail.module.css";

const ServicesDetail: FunctionComponent = () => {
  return (
    <div className={styles.servicesDetail}>
      <NAVIGATION2
        nAVIGATIONBorderBottom="1px solid #e4e4e4"
        lOGO="/logo3@2x.png"
        quickLinksBorderBottom="unset"
        quickLinksBorderBottom1="unset"
        quickLinksBorderBottom2="2px solid #121518"
        dividerBorderRight="1px solid #e4e4e4"
        dividerOpacity="unset"
      />
      <BreadcrumbContainer />
      <MainContent />
      <section className={styles.outAwardsWrapper}>
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
          <div className={styles.content}>
            <AwardItems
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
      <FrameComponent16 />
      <FOOTER
        protagonista="pending_I7736:3896;7617:3525"
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

export default ServicesDetail;
