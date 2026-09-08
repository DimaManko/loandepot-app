import { Routes, Route, Navigate } from "react-router-dom";

import { HeroSection } from "./components/home/HeroSection.jsx";
import ModuleSection from "./components/module/ModuleSection.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="modules/:modulesId" element={<ModuleSection />} />
      <Route path="/modules" element={<Navigate to={`/modules/1`} replace />} />
    </Routes>
  );
}
