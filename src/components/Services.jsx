export default function Services(){
  const items = [
    {title: "Asesoría", desc: "Orientación técnica y metodológica."},
    {title: "Capacitación", desc: "Formación presencial y virtual."},
    {title: "Desarrollo", desc: "Proyectos a medida y creación de prototipos."}
  ];
  return (
    <section id="services" className="py-16 bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s,i)=>(
            <div key={i} className="p-6 rounded-xl glass">
              <h3 className="font-semibold text-lg text-brand-gold">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}