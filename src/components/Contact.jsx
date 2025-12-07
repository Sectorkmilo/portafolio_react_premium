export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0b0b0b] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
        <p className="text-gray-300 mb-6">
          Escríbenos para coordinar una reunión o solicitar información.
        </p>

        <form className="grid gap-4">
          <input
            className="p-3 rounded bg-white/10 border border-white/10 text-white outline-none focus:border-brand-gold transition"
            placeholder="Nombre y Apellido"
          />

          <input
            className="p-3 rounded bg-white/10 border border-white/10 text-white outline-none focus:border-brand-gold transition"
            placeholder="Correo@mail.com"
          />

          <textarea
            className="p-3 rounded bg-white/10 border border-white/10 text-white outline-none focus:border-brand-gold transition"
            rows="4"
            placeholder="Mensaje"
          ></textarea>

          {/* ÚNICO BOTÓN ELEGANTE */}
          <button
            type="button"
            className="
              px-6 py-3 rounded font-semibold text-black
              bg-brand-gold
              transition-all duration-300
              hover:scale-105 hover:bg-yellow-400
              active:scale-95
            "
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}