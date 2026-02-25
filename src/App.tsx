import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShowcasePage from "./components/ShowcaseSection";
import DemoModal from "./components/DemoModal";

export default function App() {

  // GLOBAL modal state
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  return (
    <BrowserRouter>

      {/* Navbar gets openDemo */}
      <Navbar openDemo={openDemo} />

      <Routes>
        {/* Home page gets openDemo → Hero button will work */}
        <Route path="/" element={<HomePage openDemo={openDemo} />} />

        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>

      <Footer />

      {/* GLOBAL MODAL (VERY IMPORTANT) */}
      <DemoModal isOpen={demoOpen} onClose={closeDemo} />

    </BrowserRouter>
  );
}