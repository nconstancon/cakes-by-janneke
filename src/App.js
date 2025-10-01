import React from 'react';
import './styles/global.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import CustomOrders from './pages/CustomOrders';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/custom" element={<CustomOrders />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
