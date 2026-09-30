import React from "react";

const HomeHeroSection = ({ setCurrentPage }) => {
  const [brandCount, setBrandCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    let frameId = null;
    const duration = 1400;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.round(progress * 25);
      setBrandCount(currentValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCount);
      }
    };

    frameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-gray-50 px-6 py-16 font-[Manrope] sm:px-10 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.24),_rgba(255,255,255,0)_45%)]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(90deg,rgba(191,219,254,0.18),rgba(255,255,255,0)_60%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-13rem)] max-w-6xl items-center gap-12 md:grid-cols-[3fr_2fr] lg:gap-20">
        <div className="animate-fade-in">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg shadow-gray-200/70">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Disponibilidad para proyectos
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
            Creando <span className="text-blue-600">Impacto Visual</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Estrategia visual integral que abarca desde la producción y captura hasta la postproducción, diseñando contenido que conecta con tu audiencia.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              Ver Portafolio
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:border-gray-900"
            >
              Contáctame
            </button>
          </div>
        </div>

        <aside className="group relative animate-fade-in overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-slate-300/50 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(59,130,246,0.45)] sm:p-9">
          <div className="absolute inset-0 origin-bottom-right scale-95 bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.42),_rgba(255,255,255,0)_58%)] opacity-80 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100" />
          <div className="absolute inset-0 origin-bottom-right scale-95 bg-[linear-gradient(270deg,rgba(191,219,254,0.3),rgba(255,255,255,0.9)_58%,rgba(255,255,255,1))] opacity-90 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100" />

          <div className="relative space-y-4 opacity-100 transition-all duration-700 ease-out group-hover:translate-x-[-4px] group-hover:opacity-95">
            <h2 className="text-4xl font-extrabold leading-none text-gray-900 transition-transform duration-700 ease-out group-hover:translate-x-1">
              <span className="text-blue-600">+{brandCount}</span> Marcas
            </h2>

            <p className="text-base leading-relaxed text-gray-600 transition-all duration-700 ease-out group-hover:translate-x-1">
              Impulsadas a través de contenido audiovisual de alto rendimiento y estrategia digital.
            </p>

            <p className="text-sm font-medium uppercase tracking-[0.14em] text-gray-500 transition-all duration-700 ease-out group-hover:translate-x-1">
              Contenido para plataformas como:
            </p>

            <ul className="flex flex-wrap gap-2 pt-1 text-sm font-medium text-gray-700 transition-all duration-700 ease-out group-hover:translate-x-1">
              <li className="rounded-full border border-gray-900 bg-gray-900 px-3 py-2 text-white shadow-sm transition-all duration-300 hover:shadow-lg">Facebook</li>
              <li className="rounded-full border border-gray-900 bg-gray-900 px-3 py-2 text-white shadow-sm transition-all duration-300 hover:shadow-lg">Instagram</li>
              <li className="rounded-full border border-gray-900 bg-gray-900 px-3 py-2 text-white shadow-sm transition-all duration-300 hover:shadow-lg">TikTok</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeHeroSection;
