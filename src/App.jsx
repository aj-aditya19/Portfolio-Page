import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./assets/pages/Home";
import Analytics from "./assets/pages/Analytics";
import "./styles/global.css";

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    import("./utils/tracker").then(({ trackVisit }) => {
      trackVisit({ path: location.pathname, referrer: document.referrer });
    });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
