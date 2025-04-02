import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Design from './components/Design';

import Footer from './components/Footer';
import Mord from './components/Mord';
import Myucdavis from './components/Myucdavis';
import Artboard from './components/Artboard';
import './styles/App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <nav className="nav">
          <Link to="/" className="nav-link">IS.</Link>
          <div className="nav-right">
            <Link to="/design" className="nav-link">design</Link>
            <Link to="/" className="nav-link">about</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/design" element={<Design />} />

            <Route path="/mord" element={<Mord />} />
            <Route path="/myucdavis" element={<Myucdavis />} />
            <Route path="/artboard" element={<Artboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
