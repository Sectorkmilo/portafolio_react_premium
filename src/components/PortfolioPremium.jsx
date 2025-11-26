import { useState } from "react";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "Ángela María Lascarro Quinto",
    role: "Coordinadora",
    bio: "Trabajadora Social y Magíster en Gobierno y Políticas Públicas.",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    name: "Cristian Enrique Suárez Martínez",
    role: "Coordinador",
    bio: "Especialista en gestión empresarial con experiencia en respuesta humanitaria.",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Laura Romero",
    role: "Analista",
    bio: "Profesional en análisis de datos con enfoque social.",
    photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  }
];

export default function PortfolioPremium() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % profiles.length);
  const prev = () => setIndex((index - 1 + profiles.length) % profiles.length);

  return (
    <div className="w-full min-h-screen bg-white text-black p-10 flex flex-col items-center">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold">Equipo Profesional</h1>
        <p className="text-gray-500 mt-2 text-lg max-w-2xl mx-auto">
          Portafolio Premium con carrusel 3D animado con Framer Motion.
        </p>
      </header>

      <div className="relative w-[400px] h-[400px] perspective mb-10">
        {profiles.map((person, i) => {
          const offset = (i - index + profiles.length) % profiles.length;

          return (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              initial={false}
              animate={{
                zIndex: offset === 0 ? 10 : -offset,
                scale: offset === 0 ? 1 : 0.8,
                opacity: offset === 0 ? 1 : 0.4,
                rotateY: offset * 50,
                x: offset * 180,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold">{profiles[index].name}</h2>
        <h3 className="text-purple-600 font-semibold text-lg">
          {profiles[index].role}
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          {profiles[index].bio}
        </p>
      </div>

      <div className="flex gap-6 mt-8">
        <button
          onClick={prev}
          className="px-6 py-2 bg-black text-white rounded-full shadow-lg"
        >
          ◀ Anterior
        </button>
        <button
          onClick={next}
          className="px-6 py-2 bg-black text-white rounded-full shadow-lg"
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}
