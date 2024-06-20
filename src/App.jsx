import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./api/auth/AuthContextProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
