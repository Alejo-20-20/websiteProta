import { FunctionComponent } from "react";
import Button from "./Button";
import AwardItem from "./AwardItem";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.ourAwardsWrapper, className].join(" ")}>
      <div className={styles.ourAwards}>
        <div className={styles.awardsIntro}>
          <div className={styles.exploreOurAwardsWrapper}>
            <h1 className={styles.exploreOurAwards}>Explore our awards</h1>
          </div>
          <Button
            icon={false}
            propBackgroundColor="unset"
            propBorder="1px solid #abb0b4"
            propPadding="10px 30px"
            propWidth="125px"
            buttonHover="View all"
            propColor="#121518"
            propMinWidth="62px"
            propTextDecoration="unset"
            propFontWeight="unset"
            propFlex="unset"
            arrowDownRight="/arrowdownright1.svg"
          />
        </div>
        <div className={styles.content}>
          <AwardItem
            branding="Branding"
            roremIpsumDolorSitAmetConsect="Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
          />
          <AwardItem
            propBorderTop="1px solid #e4e4e4"
            branding="After noon award"
            roremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
          />
          <AwardItem
            propBorderTop="1px solid #e4e4e4"
            branding="After noon award"
            roremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
