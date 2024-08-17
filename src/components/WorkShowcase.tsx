import { FunctionComponent } from "react";
import styles from "./WorkShowcase.module.css";

export type WorkShowcaseType = {
  className?: string;
};

const WorkShowcase: FunctionComponent<WorkShowcaseType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.workShowcase, className].join(" ")}>
      <div className={styles.showcaseContent}>
        <div className={styles.workHeader}>
          <div className={styles.headerElements}>
            <div className={styles.headingPair}>
              <div className={styles.heading}>{`Selected work `}</div>
            </div>
            <h1 className={styles.works}>
              <span>{` `}</span>
              <span className={styles.works1}>Works</span>
            </h1>
            <div className={styles.headingPair1}>
              <div className={styles.heading}>hold and drag to discover</div>
            </div>
          </div>
        </div>
        <div className={styles.workGallery}>
          <div className={styles.galleryItems}>
            <div className={styles.galleryImages}>
              <div className={styles.img} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>Illustration</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
            <div className={styles.galleryImages}>
              <div className={styles.image} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>lanscape AI create</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
            <div className={styles.galleryImages}>
              <div className={styles.imageChild} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>VietNam Lanscape style</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItems}>
            <div className={styles.galleryImages}>
              <div className={styles.imageChild} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>mountant oil paint</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
            <div className={styles.galleryImages}>
              <div className={styles.imageChild} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>3D model package</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItems}>
            <div className={styles.galleryImages}>
              <div className={styles.image} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>future</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
            <div className={styles.galleryImages}>
              <div className={styles.image} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>Illustration</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
            <div className={styles.galleryImages}>
              <div className={styles.image} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>Illustration</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
            <div className={styles.galleryImages}>
              <div className={styles.img} />
              <div className={styles.imageDescription}>
                <b className={styles.illustration}>2D VECTOR PLAIN</b>
                <div className={styles.garden2dIllustration}>
                  Garden 2D Illustration
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageSetThree}>
            <div className={styles.imageChild} />
            <div className={styles.haLongBayCreateParent}>
              <b className={styles.illustration}>Ha Long bay create</b>
              <div className={styles.garden2dIllustration}>
                Garden 2D Illustration
              </div>
            </div>
            <div className={styles.img} />
            <div className={styles.imageDescription}>
              <b className={styles.illustration}>Illustration</b>
              <div className={styles.garden2dIllustration}>
                Garden 2D Illustration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
