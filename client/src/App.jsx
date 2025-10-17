import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExpertSystem from "./pages/ExpertSystem";
import Navbar from "./components/Navbar";
import useScrollToTop from "./hooks/useScrollToTop";
import AboutPage from "./pages/AboutPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ExpertSystemSimple from "./pages/ExpertSystemSimple";

function App() {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <div className="pt-11">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/expert" element={<ExpertSystem />} />
          <Route path="/expert-simple" element={<ExpertSystemSimple />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default App;
