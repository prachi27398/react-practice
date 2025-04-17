import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageMeta from './components/PageMeta';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Hero from './components/Hero';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <Router>
      <PageMeta/>   {/* Set title/meta automatically based on route */}
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <DarkModeToggle/>
      <Footer />
    </Router>
  );
}

export default App;
