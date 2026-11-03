import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] relative selection:bg-purple-600/30 selection:text-purple-200 flex flex-col justify-between">
        {/* Sticky Global Navigation */}
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenResume={() => setIsResumeModalOpen(true)}
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              }
            />
            <Route
              path="/projects/:slug"
              element={
                <ProjectDetail
                  onOpenResume={() => setIsResumeModalOpen(true)}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* In-Depth Project Quick Modal (Optional overlay) */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Global Resume Preview & Download Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </Router>
  );
}
