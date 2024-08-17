import { FunctionComponent } from "react";
import BREADCRUMB from "./BREADCRUMB";
import styles from "./BreadcrumbContainer.module.css";

export type BreadcrumbContainerType = {
  className?: string;
};

const BreadcrumbContainer: FunctionComponent<BreadcrumbContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.breadcrumbContainer, className].join(" ")}>
      <BREADCRUMB
        aboutUs="Service detail"
        ourServices="Service Detail"
        graphic="/graphic1.svg"
      />
    </section>
  );
};

export default BreadcrumbContainer;
