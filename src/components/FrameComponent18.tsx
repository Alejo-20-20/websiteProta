import { FunctionComponent } from "react";
import FOOTER from "./FOOTER";
import styles from "./FrameComponent18.module.css";

export type FrameComponent18Type = {
  className?: string;
};

const FrameComponent18: FunctionComponent<FrameComponent18Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footerWrapper, className].join(" ")}>
      <FOOTER
        protagonista="pending_I7736:4197;7617:3525"
        lOGO="/logo-11@2x.png"
        propTextShadow="unset"
        infoProtagonistamx="Info@Protagonista.mx"
        mEXMID="MEX-MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved"
        fOOTERAlignSelf="unset"
        fOOTERFlex="1"
      />
    </footer>
  );
};

export default FrameComponent18;
