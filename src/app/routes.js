import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EcommercePlatform from "../pages/portfolio/ecommerce-platform";
import MinecraftGenerator from "../pages/portfolio/minecraft-generator";
import VetCare from "../pages/portfolio/vetcare";
import AIGameDev from "../pages/portfolio/ai-game-dev";
import CourseEnrolment from "../pages/portfolio/course-enrolment";
import CancerClassification from "../pages/portfolio/cancer-classification";
import PCATTool from "../pages/portfolio/pcat-tool";
import ClosingTheGap from "../pages/portfolio/closing-the-gap";
import GroceryStoreApp from "../pages/portfolio/grocery-store";
import CloudMusicApp from "../pages/portfolio/cloud-music-app";


const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/portfolio-react-5/" element={<Home />} />
    <Route path="/portfolio-react-5/ecommerce-platform" element={<EcommercePlatform />} />
    <Route path="/portfolio-react-5/minecraft-generator" element={<MinecraftGenerator />} />
    <Route path="/portfolio-react-5/vetcare" element={<VetCare />} />
    <Route path="/portfolio-react-5/ai-game-dev" element={<AIGameDev />} />
    <Route path="/portfolio-react-5/course-enrolment" element={<CourseEnrolment />} />
    <Route path="/portfolio-react-5/cancer-classification" element={<CancerClassification />} />
    <Route path="/portfolio-react-5/pcat-tool" element={<PCATTool />} />
    <Route path="/portfolio-react-5/closing-the-gap" element={<ClosingTheGap />} />
    <Route path="/portfolio-react-5/grocery-store" element={<GroceryStoreApp />} />
    <Route path="/portfolio-react-5/cloud-music-app" element={<CloudMusicApp />} />

      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
