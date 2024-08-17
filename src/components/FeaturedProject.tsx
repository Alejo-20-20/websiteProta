import { FunctionComponent } from "react";
import IMG from "./IMG";
import styles from "./FeaturedProject.module.css";

export type FeaturedProjectType = {
  className?: string;
};

const FeaturedProject: FunctionComponent<FeaturedProjectType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.featuredProject, className].join(" ")}>
      <div className={styles.img} />
      <div className={styles.projectDetails}>
        <div className={styles.projectContent}>
          <div className={styles.img1} />
          <div className={styles.img1} />
        </div>
        <div className={styles.projectContent}>
          <IMG
            propFlex="0.847"
            propMinHeight="unset"
            propPadding="36.5px 35px 36.6px"
            propMinWidth="297px"
            propPadding1="45px 32px"
            soremIpsumDolorSitAmetConsect="Sorem ipsum dolor sit amet, consecr adipiscing elit adipiscing."
          />
          <div className={styles.img1} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
