export default function Footer(){
  return (
    <footer className="py-8 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div>© {new Date().getFullYear()} TuPortafolio. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}