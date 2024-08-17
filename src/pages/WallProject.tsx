import { FunctionComponent } from "react";
import styles from "./WallProject.module.css";

const WallProject: FunctionComponent = () => {
  return (
    <div className={styles.wallProject}>
      <div className={styles.blur} />
      <header className={styles.menu}>
        <div className={styles.logoContainerParent}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <a className={styles.protagonista}>Protagonista</a>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className={styles.contentInner}>
              <div className={styles.frameChild} />
            </div>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
          </div>
        </div>
      </header>
      <main className={styles.illustrationContainerWrapper}>
        <section className={styles.illustrationContainer}>
          <div className={styles.illustrationContent}>
            <div className={styles.imageDescription}>
              <div className={styles.descriptionElements}>
                <div className={styles.illustrationCaption}>
                  <div className={styles.illustration}>ILLUSTRATION</div>
                </div>
                <div className={styles.img} />
              </div>
              <div className={styles.description}>
                <div className={styles.enchantedBrushstrokesIllustrWrapper}>
                  <h1 className={styles.enchantedBrushstrokesIllustr}>
                    Enchanted Brushstrokes Illustrating Fairy Tales
                  </h1>
                </div>
                <div className={styles.socialLinks}>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.icon2}
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                  <div className={styles.img1} />
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.descriptionElements}>
                  <div className={styles.jan122024Parent}>
                    <div className={styles.jan122024}>Jan 12, 2024</div>
                    <div className={styles.socialMediaLinks}>
                      <div className={styles.antDesigninstagramFilledParent}>
                        <img
                          className={styles.antDesigninstagramFilledIcon}
                          alt=""
                          src="/antdesigninstagramfilled.svg"
                        />
                        <img
                          className={styles.antDesigninstagramFilledIcon}
                          alt=""
                          src="/akariconspinterestfill.svg"
                        />
                        <img
                          className={styles.antDesigninstagramFilledIcon}
                          alt=""
                          src="/cibfacebookf.svg"
                        />
                        <img
                          className={styles.antDesigninstagramFilledIcon}
                          alt=""
                          src="/akariconslinkedinfill.svg"
                        />
                        <img
                          className={styles.antDesigninstagramFilledIcon}
                          alt=""
                          src="/akariconsyoutubefill.svg"
                        />
                        <img
                          className={styles.antDesigninstagramFilledIcon}
                          alt=""
                          src="/akariconstwitterfill.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerImage}>
                    <div className={styles.img2} />
                  </div>
                </div>
                <footer className={styles.rightsStatement}>
                  <div className={styles.protagonistamxAllRightsReWrapper}>
                    <div className={styles.protagonistamxAllRights}>
                      ©2024 “Protagonista.mx” All Rights Reserved
                    </div>
                  </div>
                  <div className={styles.img} />
                </footer>
              </div>
            </div>
            <div className={styles.img4} />
          </div>
          <div className={styles.placeholder}>
            <div className={styles.placeholderElementsParent}>
              <div className={styles.placeholderElements}>
                <div className={styles.separator}>01</div>
              </div>
              <div className={styles.wrapper}>
                <b className={styles.b}>-</b>
              </div>
              <div className={styles.placeholderElements1}>
                <div className={styles.div}>04</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WallProject;
