import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./api/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
