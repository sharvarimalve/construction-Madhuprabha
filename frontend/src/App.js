import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AwardsPage from "./pages/AwardsPage";
import CareerPage from "./pages/CareerPage";

import CsrActivity from "./pages/CsrActivity";

import { Award } from "lucide-react";
import BecomePartnerPage from "./pages/BecomePartnerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/becomePartner" element={<BecomePartnerPage />} />
          <Route path="/csrActivity" element={<CsrActivity />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;