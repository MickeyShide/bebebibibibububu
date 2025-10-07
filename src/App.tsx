import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import PageLayout from "./components/PageLayout";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname === "/" ? location.pathname : "layout"}>
        <Route path="/" element={<Hero />} />
        <Route element={<PageLayout />}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-black text-white">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
