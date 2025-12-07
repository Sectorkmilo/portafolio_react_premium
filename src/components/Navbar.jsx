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
          <a
  href="/hoja_vida.pdf"
  download="Hoja_de_Vida_Camilo.pdf"
  className="
    group relative overflow-hidden 
    px-6 py-3 rounded-lg font-semibold text-black
    bg-brand-gold 
    transition-all duration-300 
    hover:scale-[1.06] active:scale-95
  "
>
  <span className="flex items-center gap-2 relative z-10">
    Descargar Hoja de Vida

    {/* Ícono de descarga animado */}
    <svg
      className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  </span>

  {/* Efecto de brillo diagonal */}
  <span
    className="
      absolute inset-0 bg-white/40 
      translate-x-[-100%] 
      group-hover:translate-x-[120%] 
      rotate-12 
      transition-transform duration-700 ease-out
    "
  ></span>
</a>
        </div>
        <div className="md:hidden text-white">☰</div>
      </div>
    </nav>
  );
}