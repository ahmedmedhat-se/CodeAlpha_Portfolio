// App.js or App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Certificates from './Certificates';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
