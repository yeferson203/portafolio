import React from "react";

const subtitleText =
  "Diseño Gráfico, Edición de Video, Fotografía y Cinematografía que cuentan tu historia.";

const HomeHeroSection = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">

      {/* FIGURAS 3D */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Esfera grande izquierda */}
        <div className="absolute top-1/4 left-20 w-[420px] h-[420px]
          bg-gradient-to-br from-white via-gray-300 to-gray-500
          rounded-full shadow-2xl animate-float-slow">
        </div>

        {/* Esfera derecha */}
        <div className="absolute bottom-24 right-24 w-[320px] h-[320px]
          bg-gradient-to-tr from-gray-100 via-gray-400 to-gray-600
          rounded-full shadow-2xl animate-float">
        </div>

        {/* Esfera pequeña */}
        <div className="absolute top-32 right-1/3 w-[180px] h-[180px]
          bg-gradient-to-br from-white to-gray-400
          rounded-full shadow-xl animate-float-fast">
        </div>

      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 text-center px-8 py-14
        bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl
        animate-fade-in max-w-5xl">

        {/* TÍTULO */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Creando{" "}
          <span className="underline decoration-4 underline-offset-8">
            Impacto
          </span>{" "}
          Visual
        </h1>

        {/* SUBTÍTULO INTERACTIVO */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
          {subtitleText.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2 transition-transform duration-200
                hover:scale-125 hover:text-gray-900 cursor-default">
              {word}
            </span>
          ))}
        </p>

        {/* BOTÓN */}
        <button
          onClick={() => setCurrentPage("portfolio")}
          className="px-12 py-4 bg-black text-white text-lg font-semibold
            rounded-full shadow-xl hover:bg-gray-900
            transition-all duration-300 transform hover:scale-105">
          Ver Portafolio
        </button>

      </div>
    </section>
  );
};

export default HomeHeroSection;
