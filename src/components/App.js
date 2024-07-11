import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectGrid from './ProjectGrid';
import ProjectDetail from './ProjectDetail';
import MenuOverlay from './MenuOverlay';
import '../css/style.css';

const projects = [
  { id: 1, title: 'Web Development', image: 'https://via.placeholder.com/300', description: 'A web development project using React and Node.js' },
  { id: 2, title: 'Mobile App', image: 'https://via.placeholder.com/300', description: 'A cross-platform mobile app built with React Native' },
  { id: 3, title: 'Data Analysis', image: 'https://via.placeholder.com/300', description: 'Data analysis project using Python and Pandas' },
  { id: 4, title: 'UI/UX Design', image: 'https://via.placeholder.com/300', description: 'User interface design for a popular web application' },
  { id: 5, title: 'Machine Learning', image: 'https://via.placeholder.com/300', description: 'Implementation of ML algorithms for predictive analytics' },
  { id: 6, title: 'Open Source', image: 'https://via.placeholder.com/300', description: 'Contributions to various open source projects' },
];

Modal.setAppElement('#root');

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      <h1 className="title">Amanda Related</h1>
      <ProjectGrid projects={projects} openProject={openProject} />
      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeProject}
        contentLabel="Project Details"
      >
        {selectedProject && <ProjectDetail project={selectedProject} onClose={closeProject} />}
      </Modal>
      <div className="menu-button" onClick={toggleMenu}>Menu</div>
      <div className="contact-button">Contact</div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default App;