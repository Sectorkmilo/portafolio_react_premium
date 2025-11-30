export default function Contact(){
  return (
    <section id="contact" className="py-16 bg-[#0b0b0b] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-300 mb-6">Escríbenos para coordinar una reunión o solicitar información.</p>

        <form className="grid gap-4">
          <input className="p-3 rounded bg-white/6 border border-white/6 text-white" placeholder="Nombre" />
          <input className="p-3 rounded bg-white/6 border border-white/6 text-white" placeholder="Correo" />
          <textarea className="p-3 rounded bg-white/6 border border-white/6 text-white" rows="4" placeholder="Mensaje"></textarea>
          <div className="flex gap-4">
            <button type="button" className="px-5 py-3 bg-brand-gold text-black rounded font-semibold">Enviar</button>
            <a href="mailto:camilo892009@gmail.com" className="px-5 py-3 border rounded border-white/10">Enviar por correo</a>
          </div>
        </form>
      </div>
    </section>
  );
}