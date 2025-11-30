import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Mi Portafolio</div>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="text-white hover:text-brand-gold">Inicio</a>
          <a href="#about" className="text-white hover:text-brand-gold">Sobre</a>
          <a href="#services" className="text-white hover:text-brand-gold">Servicios</a>
          <a href="#projects" className="text-white hover:text-brand-gold">Proyectos</a>
          <a href="#contact" className="text-white hover:text-brand-gold">Contacto</a>
        </div>
        <div className="md:hidden text-white">☰</div>
      </div>
    </nav>
  );
}