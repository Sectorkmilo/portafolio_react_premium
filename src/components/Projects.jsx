export default function Projects(){
  const projects = [
    {title:"Proyecto A", desc:"Vacaciones en la playa", img:"/images/proj1.jpg"},
    {title:"Proyecto B", desc:"Estudio de Música", img:"/images/proj2.jpg"}
  ];
  return (
    <section id="projects" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p,i)=>(
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}