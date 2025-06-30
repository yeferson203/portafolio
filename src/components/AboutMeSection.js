import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 bg-white rounded-2xl shadow-xl my-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
        Sobre Mí
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          {<img
            src="/assets/images/y1.png"
            alt="Perfil"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />}
        </div>
        <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            Soy productor audiovisual con enfoque creativo y estratégico. Me especializo en capturar ideas, momentos y emociones a través del video, la fotografía y la edición.
          </p>
          <p className="mb-6">
            Creo contenido visual que conecta, transmite y vende. Cada proyecto es una oportunidad para contar una historia con intención y estilo.
          </p>
          <p>
            Si buscas alguien que entienda tu visión y la convierta en una pieza visual efectiva, hablemos. Estoy listo para crear contigo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
