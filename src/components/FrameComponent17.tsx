import { FunctionComponent } from "react";
import NAVIGATION2 from "./NAVIGATION2";
import BREADCRUMB from "./BREADCRUMB";
import styles from "./FrameComponent17.module.css";

export type FrameComponent17Type = {
  className?: string;
};

const FrameComponent17: FunctionComponent<FrameComponent17Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.navigationParent, className].join(" ")}>
      <NAVIGATION2
        nAVIGATIONBorderBottom="1px solid #e4e4e4"
        lOGO="/logo3@2x.png"
        quickLinksBorderBottom="unset"
        quickLinksBorderBottom1="unset"
        quickLinksBorderBottom2="2px solid #121518"
        dividerBorderRight="1px solid #e4e4e4"
        dividerOpacity="unset"
      />
      <BREADCRUMB
        propFlex="unset"
        propAlignSelf="stretch"
        propRowGap="unset"
        aboutUs="About Us"
        propMarginLeft="-213.5px"
        propMinWidth="unset"
        ourServices="Our Services"
        propMinWidth1="109px"
        propTextDecoration="none"
        graphic="/graphic1.svg"
      />
    </section>
  );
};

export default FrameComponent17;
