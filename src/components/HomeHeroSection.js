import React from 'react';

const HomeHeroSection = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517030312300-f2201907290b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg">
          Creando Impacto Visual
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Diseño Gráfico, Edición de Video, Fotografía y Cinematografía que cuentan tu historia.
        </p>
        <button
          onClick={() => setCurrentPage('portfolio')}
          className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
        >
          Ver Portafolio
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSection;