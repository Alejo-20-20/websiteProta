import { FunctionComponent } from "react";
import Service from "./Service";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.servicesWrapper, className].join(" ")}>
      <div className={styles.services}>
        <h1 className={styles.ourCreativeOfferings}>Our Creative Offerings</h1>
        <div className={styles.content}>
          <Service
            icon="/icon-21.svg"
            brandStrategy="Brand Strategy"
            soremIpsumDolorSitAmetConsect="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Service
            icon="/icon-3.svg"
            brandStrategy="Packaging Design"
            soremIpsumDolorSitAmetConsect="Norem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Service
            icon="/icon-4.svg"
            brandStrategy="Food Photography"
            soremIpsumDolorSitAmetConsect="Korem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Service
            icon="/icon-5.svg"
            brandStrategy="virtual Reality"
            soremIpsumDolorSitAmetConsect="Corem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Service
            icon="/icon-6.svg"
            brandStrategy="Fashion Design"
            soremIpsumDolorSitAmetConsect="Norem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Service
            icon="/icon-7.svg"
            brandStrategy="video Production"
            soremIpsumDolorSitAmetConsect="Jorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
