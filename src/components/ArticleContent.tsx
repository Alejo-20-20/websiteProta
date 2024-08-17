import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ArticleContent.module.css";

export type ArticleContentType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMinHeight?: CSSProperties["minHeight"];
  propBottom?: CSSProperties["bottom"];
};

const ArticleContent: FunctionComponent<ArticleContentType> = ({
  className = "",
  propAlignSelf,
  propWidth,
  propMinHeight,
  propBottom,
}) => {
  const articleContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      minHeight: propMinHeight,
    };
  }, [propAlignSelf, propWidth, propMinHeight]);

  const arrowRightIconStyle: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div
      className={[styles.articleContent, className].join(" ")}
      style={articleContentStyle}
    >
      <div className={styles.heading06Parent}>
        <h2 className={styles.heading06}>
          Exploring AI Generation Create Image
        </h2>
        <div className={styles.articleMeta}>
          <div className={styles.byMaverickNguyen}>by Maverick Nguyen</div>
          <div className={styles.metaDataElements}>
            <div className={styles.metaDataIcons} />
          </div>
          <div className={styles.metaDataElements1}>
            <div className={styles.oct122023}>Oct 12, 2023</div>
          </div>
          <div className={styles.metaDataElements}>
            <div className={styles.metaDataIcons} />
          </div>
          <div className={styles.metaDataElements1}>
            <div className={styles.comments}>02 comments</div>
          </div>
        </div>
      </div>
      <div className={styles.contentResult}>
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis...
      </div>
      <img
        className={styles.arrowrightIcon}
        loading="lazy"
        alt=""
        src="/arrowright.svg"
        style={arrowRightIconStyle}
      />
    </div>
  );
};

export default ArticleContent;
