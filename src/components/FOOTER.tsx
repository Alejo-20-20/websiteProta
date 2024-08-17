import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FOOTER.module.css";

export type FOOTERType = {
  className?: string;
  protagonista?: string;
  lOGO?: string;
  infoProtagonistamx?: string;
  mEXMID?: string;
  protagonistamxAllRights?: string;

  /** Style props */
  propTextShadow?: CSSProperties["textShadow"];
};

const FOOTER: FunctionComponent<FOOTERType> = ({
  className = "",
  protagonista,
  lOGO,
  propTextShadow,
  infoProtagonistamx,
  mEXMID,
  protagonistamxAllRights,
}) => {
  const protagonistaStyle: CSSProperties = useMemo(() => {
    return {
      textShadow: propTextShadow,
    };
  }, [propTextShadow]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.menu}>
        <img className={styles.protagonistaIcon} alt="" src={protagonista} />
        <div className={styles.info}>
          <div className={styles.logo}>
            <div className={styles.logo1}>
              <img className={styles.logoIcon} alt="" src={lOGO} />
              <h1 className={styles.protagonista} style={protagonistaStyle}>
                Protagonista
              </h1>
            </div>
            <div
              className={styles.aeneanPortaEros}
            >{`Aenean porta, eros lacus congue lorem, samet mollis `}</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
              <b className={styles.english}>English</b>
            </div>
            <img className={styles.frameIcon1} alt="" src="/frame-1.svg" />
          </div>
          <div className={styles.form}>
            <div className={styles.yourEmail}>Your email</div>
            <img
              className={styles.arrowcirclerightIcon}
              alt=""
              src="/arrowcircleright-4.svg"
            />
          </div>
          <div className={styles.social}>
            <div className={styles.icon}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/antdesigninstagramfilled.svg"
              />
            </div>
            <div className={styles.icon}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/akariconspinterestfill.svg"
              />
            </div>
            <div className={styles.icon}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/cibfacebookf.svg"
              />
            </div>
            <div className={styles.icon}>
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/akariconslinkedinfill.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.contactDetails}>
            <div className={styles.contact}>Contact</div>
            <div className={styles.contactMethods}>
              <div className={styles.info1}>
                <img
                  className={styles.phoneIcon}
                  loading="lazy"
                  alt=""
                  src="/phone.svg"
                />
                <div className={styles.contactValues}>001-1234-88888</div>
              </div>
              <div className={styles.info1}>
                <img
                  className={styles.phoneIcon}
                  loading="lazy"
                  alt=""
                  src="/envelopesimple.svg"
                />
                <div className={styles.infoprotagonistamx}>
                  {infoProtagonistamx}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.mexMid}>{mEXMID}</div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <div className={styles.quickLinks1}>Quick Links</div>
          <div className={styles.linkColumns}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.faqpricing}>FAQ/Pricing</div>
            <div className={styles.blog}>Blog</div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <div className={styles.support}>Support</div>
          <div className={styles.linkColumns}>
            <div className={styles.community}>Community</div>
            <div className={styles.helpCenter}>Help Center</div>
            <div className={styles.brands}>Brands</div>
            <div className={styles.careers}>Careers</div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.left}>
          <div className={styles.protagonistamxAllRights}>
            {protagonistamxAllRights}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.termsOfServicesContainer}>
            <span>Terms Of Services</span>
            <span className={styles.span}>{`  |  `}</span>
            <span>Privacy Policy</span>
            <span className={styles.span}>{`  |  `}</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FOOTER;
