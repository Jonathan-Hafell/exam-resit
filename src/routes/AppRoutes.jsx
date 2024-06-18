import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BrowsePage from "../pages/BrowsePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/browse" element={<BrowsePage />} />
    </Routes>
  );
};

export default AppRoutes;
