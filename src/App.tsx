import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Portfolio1 from "./pages/Portfolio1";
import WallProject from "./pages/WallProject";
import HomeStudio from "./pages/HomeStudio";
import HomeCreativeAgency from "./pages/HomeCreativeAgency";
import Portfolio2 from "./pages/Portfolio";
import ServicesDetail from "./pages/ServicesDetail";
import OurServices from "./pages/OurServices";
import Portfolio from "./pages/Portfolio2";
import PortfolioDetail from "./pages/PortfolioDetail";
import AboutUs from "./pages/AboutUs";
import MegaMenu from "./pages/MegaMenu";
import BlogDetail from "./pages/BlogDetail";
import Blogs from "./pages/Blogs";
import PricingFAQ from "./pages/PricingFAQ";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/05-portfolio-02":
        title = "";
        metaDescription = "";
        break;
      case "/03-wall-project":
        title = "";
        metaDescription = "";
        break;
      case "/01-home-studio":
        title = "";
        metaDescription = "";
        break;
      case "/02-home-creative-agency":
        title = "";
        metaDescription = "";
        break;
      case "/04-portfolio-01":
        title = "";
        metaDescription = "";
        break;
      case "/10-services-detail":
        title = "";
        metaDescription = "";
        break;
      case "/09-our-services":
        title = "";
        metaDescription = "";
        break;
      case "/06-portfolio-03":
        title = "";
        metaDescription = "";
        break;
      case "/07-portfolio-detail":
        title = "";
        metaDescription = "";
        break;
      case "/08-about-us":
        title = "";
        metaDescription = "";
        break;
      case "/15-mega-menu":
        title = "";
        metaDescription = "";
        break;
      case "/14-blog-detail":
        title = "";
        metaDescription = "";
        break;
      case "/13-blogs":
        title = "";
        metaDescription = "";
        break;
      case "/11-pricing-faq":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ContactUs />} />
      <Route path="/05-portfolio-02" element={<Portfolio1 />} />
      <Route path="/03-wall-project" element={<WallProject />} />
      <Route path="/01-home-studio" element={<HomeStudio />} />
      <Route path="/02-home-creative-agency" element={<HomeCreativeAgency />} />
      <Route path="/04-portfolio-01" element={<Portfolio2 />} />
      <Route path="/10-services-detail" element={<ServicesDetail />} />
      <Route path="/09-our-services" element={<OurServices />} />
      <Route path="/06-portfolio-03" element={<Portfolio />} />
      <Route path="/07-portfolio-detail" element={<PortfolioDetail />} />
      <Route path="/08-about-us" element={<AboutUs />} />
      <Route path="/15-mega-menu" element={<MegaMenu />} />
      <Route path="/14-blog-detail" element={<BlogDetail />} />
      <Route path="/13-blogs" element={<Blogs />} />
      <Route path="/11-pricing-faq" element={<PricingFAQ />} />
    </Routes>
  );
}
export default App;