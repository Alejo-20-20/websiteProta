import { FunctionComponent } from "react";
import NAVIGATION2 from "../components/NAVIGATION2";
import BREADCRUMB from "../components/BREADCRUMB";
import ArticleContent from "../components/ArticleContent";
import PostElements from "../components/PostElements";
import FOOTER from "../components/FOOTER";
import styles from "./Blogs.module.css";

const Blogs: FunctionComponent = () => {
  return (
    <div className={styles.blogs}>
      <NAVIGATION2
        nAVIGATIONBorderBottom="1px solid #e4e4e4"
        lOGO="/logo4@2x.png"
        quickLinksBorderBottom="unset"
        quickLinksBorderBottom1="unset"
        quickLinksBorderBottom2="unset"
        dividerBorderRight="1px solid #e4e4e4"
        dividerOpacity="unset"
        quickLinksBorderBottom3="2px solid #121518"
      />
      <div className={styles.breadcrumbBar}>
        <BREADCRUMB
          propFlex="1"
          propAlignSelf="unset"
          propRowGap="20px"
          aboutUs="Blog"
          propMarginLeft="-112px"
          propMinWidth="110px"
          ourServices="Blog"
          propMinWidth1="41px"
          propTextDecoration="none"
          graphic="/graphic1.svg"
          aboutUsWidth="unset"
          aboutUsDisplay="inline-block"
          aboutUsMinWidth="117px"
          breadcrumbSeparatorWidth="unset"
          contentAlignSelf="unset"
          homeFlex="unset"
          ourServicesFlex="unset"
        />
      </div>
      <main className={styles.contentWrapper}>
        <section className={styles.articlePreviewParent}>
          <div className={styles.articlePreview}>
            <div className={styles.articleHeader}>
              <div className={styles.img} />
              <ArticleContent />
              <div className={styles.img} />
            </div>
            <div className={styles.sidebar}>
              <div className={styles.search}>
                <div className={styles.search1}>Search</div>
                <img className={styles.icon} alt="" src="/icon-25.svg" />
              </div>
              <div className={styles.followUs}>
                <b className={styles.category}>Category</b>
                <div className={styles.list}>
                  <div className={styles.cooking}>
                    <div className={styles.content}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/icon-33.svg"
                      />
                      <b className={styles.uiUxDesign}>UI UX Design</b>
                    </div>
                    <b className={styles.emptyPlaceholders}>35</b>
                  </div>
                  <div className={styles.cooking}>
                    <div className={styles.content1}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/icon-33.svg"
                      />
                      <b className={styles.concept}>Concept</b>
                    </div>
                    <b className={styles.b}>14</b>
                  </div>
                  <div className={styles.cooking}>
                    <div className={styles.content2}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/icon-33.svg"
                      />
                      <b className={styles.packageDesign}>Package Design</b>
                    </div>
                    <b className={styles.b1}>3</b>
                  </div>
                  <div className={styles.cooking}>
                    <div className={styles.content3}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/icon-33.svg"
                      />
                      <b className={styles.graphicDesign}>Graphic Design</b>
                    </div>
                    <b className={styles.b2}>16</b>
                  </div>
                  <div className={styles.mealPrep}>
                    <div className={styles.content4}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/icon-33.svg"
                      />
                      <b className={styles.branding}>Branding</b>
                    </div>
                    <b className={styles.emptyPlaceholders}>65</b>
                  </div>
                </div>
              </div>
              <div className={styles.followUs}>
                <b className={styles.popularTags}>Popular tags</b>
                <div className={styles.popularTag}>
                  <div className={styles.tag}>
                    <b className={styles.creative}>Creative</b>
                  </div>
                  <div className={styles.tag1}>
                    <b className={styles.dArt}>3d Art</b>
                  </div>
                  <div className={styles.tag}>
                    <b className={styles.creative}>Creative</b>
                  </div>
                  <div className={styles.tag}>
                    <b className={styles.marketing}>Marketing</b>
                  </div>
                  <div className={styles.tag}>
                    <b className={styles.binance}>Binance</b>
                  </div>
                </div>
              </div>
              <div className={styles.recentPost}>
                <b className={styles.brands}>Recent Posts</b>
                <div className={styles.postPreviews}>
                  <PostElements
                    iMG="/img5@2x.png"
                    heading7="10 Effective Tips to Improve Your Running Form"
                  />
                  <PostElements
                    iMG="/img-14@2x.png"
                    heading7="Choosing the Right Running Shoes: A Complete Guide"
                  />
                  <PostElements
                    iMG="/img-24@2x.png"
                    heading7="Nutrition Strategies for Peak Performance in Running"
                  />
                </div>
              </div>
            </div>
          </div>
          <ArticleContent
            propAlignSelf="unset"
            propWidth="864px"
            propMinHeight="206px"
            propBottom="16px"
          />
          <div className={styles.imagePost}>
            <div className={styles.img} />
            <ArticleContent
              propAlignSelf="stretch"
              propWidth="unset"
              propMinHeight="unset"
              propBottom="0px"
            />
          </div>
          <div className={styles.pagination}>
            <div className={styles.paginationElements}>
              <div className={styles.nextButton}>1</div>
            </div>
            <div className={styles.paginationElements1}>
              <div className={styles.div}>2</div>
            </div>
            <div className={styles.next}>
              <img
                className={styles.iconarowright}
                loading="lazy"
                alt=""
                src="/iconarowright.svg"
              />
            </div>
          </div>
        </section>
      </main>
      <FOOTER
        protagonista="pending_I7736:3573;7617:3525"
        lOGO="/logo-13@2x.png"
        propTextShadow="unset"
        infoProtagonistamx="Info@Protagonista.mx"
        mEXMID="MEX-MID"
        protagonistamxAllRights="©2024 “Protagonista.mx” All Rights Reserved"
        fOOTERAlignSelf="stretch"
        fOOTERFlex="unset"
        menuPadding="0px 0px 0px"
        showProtagonistaIcon
      />
    </div>
  );
};

export default Blogs;
