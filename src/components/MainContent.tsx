import { FunctionComponent } from "react";
import FeaturesRow from "./FeaturesRow";
import Button from "./Button";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.textParent}>
          <h1 className={styles.text}>Fashion Design</h1>
          <div className={styles.img} />
          <div className={styles.planningBrandWorkAndFunParent}>
            <h2 className={styles.planningBrandWork}>
              Planning brand, work and fun
            </h2>
            <div className={styles.text1}>
              Lorem ipsum dolor sit amet consectetur. Eu nullam et malesuada
              leo. Sed convallis ornare suspendisse tempor commodo. Nec vivamus
              in faucibus auctor nunc pellentesque dignissim proin sit. Urna
              quisque neque viverra amet pellentesque a. Vel et ac neque netus
              sed vulputate tristique sollicitudin.
            </div>
            <div className={styles.featuresGrid}>
              <FeaturesRow
                featureLabel="Material and Pattern Selection"
                featureLabel1="Style Consultation"
                featureLabel2="Production and Finishing"
              />
              <FeaturesRow
                featureLabel="Custom Design"
                featureLabel1="Satisfaction Assurance"
                featureLabel2="Vorem ipsum dolor sit amet, consectetur "
              />
            </div>
          </div>
          <Button
            icon
            propBackgroundColor="#5c29dd"
            propBorder="unset"
            propPadding="12px 32px"
            propWidth="unset"
            buttonHover="About Us"
            propColor="#fff"
            propMinWidth="72px"
            propTextDecoration="unset"
            propFontWeight="unset"
            propFlex="unset"
            arrowDownRight="/arrowdownright.svg"
          />
        </div>
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            <div className={styles.servicesHeader}>
              <b className={styles.theBestOur}>The best our Services</b>
              <div
                className={styles.supportingText}
              >{`Whether you have a team of 2 or 200, our shared team inboxes `}</div>
            </div>
            <div className={styles.nav}>
              <div className={styles.dashboard}>
                <div className={styles.fashionDesignWrapper}>
                  <b className={styles.fashionDesign}>Fashion Design</b>
                </div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown@2x.png"
                />
              </div>
              <div className={styles.research}>
                <b className={styles.graphicDesign}>Graphic Design</b>
              </div>
              <div className={styles.research}>
                <b className={styles.branding}>Branding</b>
              </div>
              <div className={styles.research}>
                <b className={styles.uiUxDesign}>UI UX Design</b>
              </div>
              <div className={styles.settings1}>
                <b className={styles.photographyStudio}>Photography studio</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
