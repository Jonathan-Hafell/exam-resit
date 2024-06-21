import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BrowsePage from "../pages/BrowsePage";
import GamesDetailPage from "../pages/GamesDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/details/:id" element={<GamesDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
