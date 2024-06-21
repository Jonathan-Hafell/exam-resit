import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BrowsePage from "../pages/BrowsePage";
import GamesDetailPage from "../pages/GamesDetailPage";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/details/:id" element={<GamesDetailPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
