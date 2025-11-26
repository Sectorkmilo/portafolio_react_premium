export default function About(){
  return (
    <section id="about" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <div className="md:flex gap-8 items-center">
          <div className="md:w-1/2 glass p-6 rounded-xl">
            <p className="text-gray-800">
              Somos un equipo multidisciplinario con experiencia en proyectos sociales, educativos y tecnológicos. Nos enfocamos en el impacto, la escalabilidad y la calidad del trabajo.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <ul className="space-y-3 text-gray-700">
              <li>• Formación y capacitación</li>
              <li>• Desarrollo de soluciones tecnológicas</li>
              <li>• Gestión de proyectos y asesoría</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}