import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeStudio from "./pages/HomeStudio";
import Portfolio1 from "./pages/Portfolio1";
import WallProject from "./pages/WallProject";
import HomeCreativeAgency from "./pages/HomeCreativeAgency";
import Portfolio from "./pages/Portfolio";

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
      case "/02-home-creative-agency":
        title = "";
        metaDescription = "";
        break;
      case "/04-portfolio-01":
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
      <Route path="/" element={<HomeStudio />} />
      <Route path="/05-portfolio-02" element={<Portfolio1 />} />
      <Route path="/03-wall-project" element={<WallProject />} />
      <Route path="/02-home-creative-agency" element={<HomeCreativeAgency />} />
      <Route path="/04-portfolio-01" element={<Portfolio />} />
    </Routes>
  );
}
export default App;
