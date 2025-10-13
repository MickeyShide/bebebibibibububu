import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { LandingHero } from "@/features/landing";
import { PortfolioPage, ProjectDetailPage } from "@/features/projects";
import { PageLayout } from "@/shared/components/layout";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname === "/" ? location.pathname : "layout"}>
        <Route path="/" element={<LandingHero />} />
        <Route element={<PageLayout />}>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
