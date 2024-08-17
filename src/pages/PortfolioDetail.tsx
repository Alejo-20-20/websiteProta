import { FunctionComponent } from "react";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./PortfolioDetail.module.css";

const PortfolioDetail: FunctionComponent = () => {
  return (
    <div className={styles.portfolioDetail}>
      <section className={styles.imgWrapper}>
        <div className={styles.img}>
          <img
            className={styles.protaLogoDesktop1}
            loading="lazy"
            alt=""
            src="/prota-logo-desktop-1@2x.png"
          />
        </div>
      </section>
      <FrameComponent14 />
      <FrameComponent15 />
      <FrameComponent7
        frame="/frame1.svg"
        inputIcon="/input-icon.svg"
        vector18="/input-icon.svg"
        vector181="/input-icon.svg"
        buttonHover=" send Message"
        arrowDownRight="/arrowdownright2.svg"
        icon
        propBackgroundColor="#f37935"
        propBorder="unset"
        propPadding="17px 32px"
        propWidth="209px"
        propColor="#f9f8f4"
        propMinWidth="115px"
        propTextDecoration="unset"
        propFontWeight="unset"
        propFlex="1"
      />
    </div>
  );
};

export default PortfolioDetail;
