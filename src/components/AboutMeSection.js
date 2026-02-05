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
            Soy Ingeniero de Sistemas y Tecnólogo en Desarrollo de Software, con amplia experiencia en el área de producción audiovisual, fotografía y mercadeo. Combino el pensamiento lógico y tecnológico con la creatividad visual para desarrollar soluciones integrales.
          </p>

          <p className="mb-6">
            Me especializo en la creación de contenido audiovisual estratégico que conecta, comunica y genera impacto, integrando video, fotografía, edición y herramientas digitales para potenciar marcas y proyectos.
          </p>

          <p>
            Si buscas a alguien que entienda tu visión tanto desde lo técnico como lo creativo y la convierta en una pieza visual efectiva, hablemos. Estoy listo para crear contigo.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
