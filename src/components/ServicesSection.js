import React from 'react';

const serviceCarouselImages = [
  'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790715926/Gemini_Generated_Image_6cgcme6cgcme6cgc_xbylny.jpg',
  'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790716919/Gemini_Generated_Image_1es5w21es5w21es5_cwapdd.jpg',
  'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790717234/Gemini_Generated_Image_91830n91830n9183_vxok9w.jpg',
  
];

const ServicesSection = () => {
  const [activeImage, setActiveImage] = React.useState(0);
  const [hasEntered, setHasEntered] = React.useState(false);

  React.useEffect(() => {
    const frameId = requestAnimationFrame(() => setHasEntered(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  React.useEffect(() => {
    if (serviceCarouselImages.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % serviceCarouselImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const services = [
    {
      title: 'Desarrollo Web y de Aplicativos',
      description: 'Diseño y desarrollo de sitios web y apps personalizadas con enfoque funcional, visual y responsive para potenciar tu presencia digital.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M4 8h16v12H4zM4 8V6h16v2M10 12h4" />
        </svg>
      ),
    },
    {
      title: 'Diseño Gráfico',
      description: 'Creación de logotipos, branding, material publicitario y diseño para redes sociales que capturan la esencia de tu marca.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Edición de Video',
      description: 'Post-producción profesional para videos corporativos, comerciales, documentales y contenido para redes, con un toque cinematográfico.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Fotografía',
      description: 'Sesiones fotográficas de producto, retrato, eventos y paisajes, capturando la esencia y el detalle con calidad profesional.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Cinematografía',
      description: 'Producción de contenido audiovisual de alta calidad, desde la pre-producción hasta la post-producción, para proyectos ambiciosos.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m-4 8h4m10-4h4m-4 4h4M7 8a4 4 0 100 8h10a4 4 0 100-8H7z" />
        </svg>
      ),
    },
    {
      title: 'Generación de Imágenes y Videos con IA',
      description: 'Creación de imágenes y videos mediante inteligencia artificial para campañas publicitarias, contenido digital, conceptos visuales y piezas creativas innovadoras.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m6.364 1.636l-2.121 2.121M21 12h-3m-1.636 6.364l-2.121-2.121M12 21v-3m-6.364-1.636l2.121-2.121M3 12h3m1.636-6.364l2.121 2.121" />
        </svg>
      ),
    },
  ];

  const textEntranceClass = hasEntered ? 'services-copy-enter' : 'services-copy-pending';
  const cardEntranceClass = hasEntered ? 'services-card-enter' : 'services-card-pending';

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-16 font-[Manrope] sm:py-24 lg:px-10">
      <div className="relative isolate mb-12 flex min-h-[25rem] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-1/2 overflow-hidden rounded-[1.75rem] md:block" aria-hidden="true">
          {serviceCarouselImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover blur-[0px] transition-opacity duration-1000 ${activeImage === index ? 'opacity-90' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-l from-[#f4f6f8]/20 via-[#f4f6f8]/55 to-[#f4f6f8]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6f8]/25 via-transparent to-[#f4f6f8]/50" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-3/4 bg-gradient-to-l from-blue-200/65 via-blue-100/25 to-transparent blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl py-8">
          <p className={`mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-600 ${textEntranceClass}`} style={{ animationDelay: '0ms' }}>Lo que hago</p>
          <h2 className={`text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-6xl ${textEntranceClass}`} style={{ animationDelay: '120ms' }}>
            Servicios que convierten ideas en presencia.
          </h2>
          <p className={`mt-5 text-lg leading-relaxed text-gray-600 ${textEntranceClass}`} style={{ animationDelay: '240ms' }}>
            Una mezcla de estrategia, diseño y producción para que cada pieza tenga una razón de existir.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${cardEntranceClass} group relative flex min-h-[290px] flex-col rounded-[1.75rem] border border-gray-200 bg-white/80 p-7 shadow-lg shadow-slate-200/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/70`}
            style={{ animationDelay: `${360 + index * 130}ms` }}
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-950 p-3 transition-colors duration-300 group-hover:bg-blue-600">
              {service.icon}
            </div>
            <h3 className="mb-3 text-xl font-extrabold tracking-tight text-gray-950">
              {service.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
