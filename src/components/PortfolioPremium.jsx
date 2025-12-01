import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const profiles = [
  {
    id: 1,
    name: "Christian Camilo Chavarria",
    role: "Diseñador del proyecto",
    bio: "Estudiante de Ingeniería de Software de 6to semestre",
    photo: "/images/christian.jpg"
  },
  {
    id: 2,
    name: "Christian Camilo Chavarría",
    role: "Coordinador",
    bio: "Especialista en gestión empresarial con experiencia en respuesta humanitaria.",
    photo: "/images/cristian.jpg"
  },
  {
    id: 3,
    name: "Christian Camilo Chavarria",
    role: "Estudiante de 6to semestre de ingeniería de software",
    bio: "Quiero graduarme el otro año.",
    photo: "/images/camilo.jpg"
  },
  {
    id: 4,
    name: "Christian Camilo Chavarria",
    role: "Analista",
    bio: "Profesional en análisis de datos con enfoque social.",
    photo: "/images/laura.jpg"
  }
];

export default function PortfolioPremium() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    startAutoplay();
    window.addEventListener("keydown", handleKeys);
    return () => {
      stopAutoplay();
      window.removeEventListener("keydown", handleKeys);
    };
  }, [index]);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (!isHovering.current) setIndex(i => (i + 1) % profiles.length);
    }, 3500);
  }

  function stopAutoplay() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleKeys(e) {
    if (e.key === "ArrowRight") setIndex(i => (i + 1) % profiles.length);
    if (e.key === "ArrowLeft") setIndex(i => (i - 1 + profiles.length) % profiles.length);
  }

  function goTo(i) {
    setIndex(i);
  }

  return (
    <section id="home" className="pt-24 pb-16 bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Equipo Profesional</h1>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Este trabajo se desarrolla para el curso de Mantenimiento de Software con el profesor Jose Ruiz,
            sobre los comandos para el control de versiones con GitHub.
          </p>
        </header>

        <div
          className="relative w-[320px] md:w-[480px] h-[320px] md:h-[480px] perspective"
          onMouseEnter={() => { isHovering.current = true; }}
          onMouseLeave={() => { isHovering.current = false; }}
        >
          {profiles.map((p, i) => {
            const offset = (i - index + profiles.length) % profiles.length;
            return (
              <motion.div
                key={p.id}
                className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                initial={false}
                animate={{
                  zIndex: offset === 0 ? 30 : 10 - offset,
                  scale: offset === 0 ? 1 : 0.82,
                  opacity: offset === 0 ? 1 : 0.35,
                  rotateY: offset * 40,
                  x: offset * 150,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>

        {/* Info + Controls */}
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold">{profiles[index].name}</h2>
          <h3 className="text-brand-gold font-semibold">{profiles[index].role}</h3>
          <p className="text-gray-400 max-w-xl mx-auto mt-2">{profiles[index].bio}</p>

          <div className="flex gap-4 items-center justify-center mt-6">
            
            {/* ⬅ Flecha Premium */}
            <button
              onClick={() => setIndex((index - 1 + profiles.length) % profiles.length)}
              className="
                group relative flex items-center justify-center 
                w-12 h-12 rounded-full
                bg-white/5 backdrop-blur-sm border border-white/10
                hover:bg-brand-gold hover:border-brand-gold
                transition-all duration-300
              "
            >
              <span className="text-white group-hover:text-black text-2xl font-light">‹</span>
            </button>

            {/* Puntos de navegación */}
            <div className="flex gap-2 items-center">
              {profiles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-brand-gold" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* ➡ Flecha Premium */}
            <button
              onClick={() => setIndex((index + 1) % profiles.length)}
              className="
                group relative flex items-center justify-center 
                w-12 h-12 rounded-full
                bg-white/5 backdrop-blur-sm border border-white/10
                hover:bg-brand-gold hover:border-brand-gold
                transition-all duration-300
              "
            >
              <span className="text-white group-hover:text-black text-2xl font-light">›</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
