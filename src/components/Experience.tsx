import { FunctionComponent } from "react";
import styles from "./Experience.module.css";

export type ExperienceType = {
  className?: string;
};

const Experience: FunctionComponent<ExperienceType> = ({ className = "" }) => {
  return (
    <section className={[styles.experience, className].join(" ")}>
      <div className={styles.experience1}>
        <div className={styles.nokiaProta1Parent}>
          <img
            className={styles.nokiaProta1}
            alt=""
            src="/nokia-prota-1@2x.png"
          />
          <img
            className={styles.uNeedProta1}
            loading="lazy"
            alt=""
            src="/u-need-prota-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.serviceDescription}>
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>What we do</div>
        </div>
        <div className={styles.serviceDetails}>
          <div className={styles.detailItems}>
            <h1 className={styles.graphicDesign}>Graphic Design</h1>
            <div className={styles.descriptionList}>
              <div className={styles.roremIpsumDolor}>
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
            </div>
          </div>
          <div className={styles.detailItems1}>
            <h1 className={styles.branding}>Branding</h1>
            <div className={styles.roremIpsumDolorSitAmetCoWrapper}>
              <div className={styles.roremIpsumDolor}>
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
            </div>
          </div>
          <div className={styles.detailItems2}>
            <h1 className={styles.branding}>audiovisual</h1>
            <div className={styles.descriptionList}>
              <div
                className={styles.roremIpsumDolor}
              >{`Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. `}</div>
            </div>
          </div>
          <div className={styles.detailItems2}>
            <h1 className={styles.uiUxDesign}>UI UX Design</h1>
            <div className={styles.descriptionList}>
              <div className={styles.roremIpsumDolor}>
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
