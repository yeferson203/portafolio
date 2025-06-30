import React from 'react';

const ServicesSection = () => {
  const services = [
        {
      title: 'Desarrollo Web y de Aplicativos',
      description: 'Diseño y desarrollo de sitios web y apps personalizadas con enfoque funcional, visual y responsive para potenciar tu presencia digital.',
      icon: (
        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M4 8h16v12H4zM4 8V6h16v2M10 12h4"></path>
        </svg>
      ),
    },
    {
      title: 'Diseño Gráfico',
      description: 'Creación de logotipos, branding, material publicitario y diseño para redes sociales que capturan la esencia de tu marca.',
      icon: (
        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
    },
    {
      title: 'Edición de Video',
      description: 'Post-producción profesional para videos corporativos, comerciales, documentales y contenido para redes, con un toque cinematográfico.',
      icon: (
        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: 'Fotografía',
      description: 'Sesiones fotográficas de producto, retrato, eventos y paisajes, capturando la esencia y el detalle con calidad profesional.',
      icon: (
        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
    },
    {
      title: 'Cinematografía',
      description: 'Producción de contenido audiovisual de alta calidad, desde la pre-producción hasta la post-producción, para proyectos ambiciosos.',
      icon: (
        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m-4 8h4m10-4h4m-4 4h4M7 8a4 4 0 100 8h10a4 4 0 100-8H7z"></path>
        </svg>
      ),
    },

  ];

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 bg-gray-50 rounded-2xl shadow-xl my-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
        Mis Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 bg-gray-100 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
