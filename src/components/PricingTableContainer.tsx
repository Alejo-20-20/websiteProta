import { FunctionComponent } from "react";
import HeaderColumns from "./HeaderColumns";
import styles from "./PricingTableContainer.module.css";

export type PricingTableContainerType = {
  className?: string;
};

const PricingTableContainer: FunctionComponent<PricingTableContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pricingTableContainer, className].join(" ")}>
      <div className={styles.pricing}>
        <HeaderColumns
          designApp="Design App"
          prop="$50"
          screen1="/ screen"
          workDirectlyWithYouOnUpwork="Work directly with you on Upwork"
          freeForeverGetTheBasicEssentia="Free forever get the basic essentials"
          unlimitedUnhostedSites="Unlimited unhosted sites"
          remoteOnline="Remote/Online"
          workWithBothWeekend="Work with both weekend"
          buttonHover="pick this package"
          arrowDownRight="/arrowdownright3.svg"
          icon={false}
          propBackgroundColor1="#fff"
          propBorder="1px solid #121518"
          propPadding="10px 20px"
          propWidth1="unset"
          propColor9="#121518"
          propMinWidth2="unset"
          propTextDecoration="unset"
          propFontWeight="unset"
          propFlex="unset"
          buttonAlignSelf="stretch"
          buttonHoverDisplay="unset"
        />
        <HeaderColumns
          propBackgroundColor="#5c29dd"
          designApp="Design Website"
          propColor="#fff"
          prop="$400"
          propColor1="#fff"
          propMinWidth="118px"
          screen1="/ website"
          propColor2="#fff"
          propMinWidth1="63px"
          propWidth="unset"
          propBorderTop="1px solid #fff"
          propColor3="#fff"
          workDirectlyWithYouOnUpwork="1 Homepage + 3-4 Subpages"
          propColor4="#fff"
          freeForeverGetTheBasicEssentia={`Desktop Design & Mobile Responsive`}
          propColor5="#fff"
          propColor6="#fff"
          unlimitedUnhostedSites="Advanced security and performance"
          propColor7="#fff"
          remoteOnline="Unlimited unhosted sites"
          propColor8="#fff"
          workWithBothWeekend="Live support"
          buttonHover="pick this package"
          arrowDownRight="/arrowdownright3.svg"
          icon={false}
          propBackgroundColor1="#fff"
          propBorder="unset"
          propPadding="12px 20px"
          propWidth1="unset"
          propColor9="#121518"
          propMinWidth2="unset"
          propTextDecoration="unset"
          propFontWeight="unset"
          propFlex="unset"
          buttonAlignSelf="stretch"
          buttonHoverDisplay="unset"
        />
        <HeaderColumns
          propBackgroundColor="#fff"
          designApp="Freelancer on UpWork"
          propColor="#121518"
          prop="$20"
          propColor1="#121518"
          propMinWidth="83px"
          screen1="/ hour"
          propColor2="#5a5c5e"
          propMinWidth1="unset"
          propWidth="46px"
          propBorderTop="1px solid #121518"
          propColor3="#5a5c5e"
          workDirectlyWithYouOnUpwork="Work directly with you on Upwork"
          propColor4="#5a5c5e"
          freeForeverGetTheBasicEssentia="Free forever get the basic essentials"
          propColor5="#5a5c5e"
          propColor6="#5a5c5e"
          unlimitedUnhostedSites="Unlimited unhosted sites"
          propColor7="#5a5c5e"
          remoteOnline="Remote/Online"
          propColor8="#5a5c5e"
          workWithBothWeekend="Work with both weekend"
          buttonHover="pick this package"
          arrowDownRight="/arrowdownright3.svg"
          icon={false}
          propBackgroundColor1="#fff"
          propBorder="1px solid #121518"
          propPadding="10px 20px"
          propWidth1="unset"
          propColor9="#121518"
          propMinWidth2="unset"
          propTextDecoration="unset"
          propFontWeight="unset"
          propFlex="unset"
          buttonAlignSelf="stretch"
          buttonHoverDisplay="unset"
        />
      </div>
    </section>
  );
};

export default PricingTableContainer;
