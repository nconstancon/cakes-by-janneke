import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <span className="title">Cakes by Janneke</span>
          <span className="tag">Artisanal Cakes & Cupcakes</span>
        </div>
        <div className="nav-links">
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/menu">Cakes</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/gallery">Gallery</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/custom">Custom Orders</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/about">About</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/testimonials">Testimonials</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/faq">FAQ</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}


