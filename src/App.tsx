import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShowcasePage from "./components/ShowcaseSection";
import ScrollToTop from "./components/ScrollToTop";
import DemoModal from "./components/DemoModal";
import { Toaster } from "react-hot-toast";
import FeaturesPage from "./pages/FeaturesPage";
import ArticlePage from "./pages/ArticlePage";
import Document from "./pages/Document";
import DiscoverPage from "./pages/DiscoverPage";
export default function App() {

  // GLOBAL modal state
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Toaster
  position="top-right"
  reverseOrder={false}
/>

      {/* Navbar gets openDemo */}
      <Navbar openDemo={openDemo} />

      <Routes>
        {/* Home page gets openDemo → Hero button will work */}
        <Route path="/" element={<HomePage openDemo={openDemo} />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
  <Route path="/document/:id" element={<Document />} />

        <Route path="/articles" element={<ArticlesPage />} />

      <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>

    <Footer openDemo={openDemo} />
      {/* GLOBAL MODAL (VERY IMPORTANT) */}
      <DemoModal isOpen={demoOpen} onClose={closeDemo} />

    </BrowserRouter>
  );
}