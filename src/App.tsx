import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import AboutPage from './sections/AboutPage';
import SkillsPage from './sections/SkillsPage';
import ContactPage from './sections/ContactPage';
import ProjectDetailPage from './sections/ProjectDetailPage';
import Certifications from './sections/Certifications';

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navigation />

      <main>
        <Hero />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
        <Certifications />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
