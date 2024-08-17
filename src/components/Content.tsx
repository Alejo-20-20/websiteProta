import { FunctionComponent } from "react";
import Service1 from "./Service1";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.list}>
        <Service1
          icon="/icon-22.svg"
          videoProduction="video Production"
          joremIpsumDolorSitAmetConsect="Jorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Service1
          icon="/icon-21.svg"
          videoProduction="Brand Strategy"
          propAlignSelf="stretch"
          propColor="#121518"
          joremIpsumDolorSitAmetConsect="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className={styles.contentChild} />
      <div className={styles.list}>
        <Service1
          icon="/icon-41.svg"
          videoProduction="virtual Reality"
          propAlignSelf="unset"
          propColor="#5c29dd"
          joremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur ."
        />
        <Service1
          icon="/icon-6.svg"
          videoProduction="Fashion Design"
          propAlignSelf="stretch"
          propColor="#121518"
          joremIpsumDolorSitAmetConsect="Norem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className={styles.contentItem} />
    </div>
  );
};

export default Content;
