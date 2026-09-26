import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { clientProjects } from '../mock/clientProjects';
import ProjectCarouselModal from './ProjectCarouselModal';

const PortfolioSection = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectMedia, setCurrentProjectMedia] = useState([]);
  const [currentProjectTitle, setCurrentProjectTitle] = useState('');
  const [currentProjectInfo, setCurrentProjectInfo] = useState(null);

  const uniqueClients = [...new Set(clientProjects.map(project => project.client))];

  const openCarousel = (project) => {
    setCurrentProjectMedia(project.media);
    setCurrentProjectTitle(project.title);
    setCurrentProjectInfo({
      client: project.client,
      description: project.description,
      workType: project.workType,
    });
    setIsModalOpen(true);
  };

  const closeCarousel = () => {
    setIsModalOpen(false);
    setCurrentProjectMedia([]);
    setCurrentProjectTitle('');
    setCurrentProjectInfo(null);
  };

  const filteredProjects = clientProjects.filter(
    (project) => selectedClient === null || project.client === selectedClient
  );

  const buildBrandNarrative = (project) => {
    const isAgency = project.workType === 'Agencia';
    const detail = project.description
      ? project.description.charAt(0).toLowerCase() + project.description.slice(1)
      : 'contenido audiovisual para la marca.';

    return isAgency
      ? `Este proyecto para ${project.client} fue desarrollado durante mi experiencia en una agencia creativa, donde participé en ${detail}`
      : `Este proyecto para ${project.client} fue desarrollado de forma personal e independiente, sin intermediación de una agencia, enfocado en ${detail}`;
  };

  const renderTitleWithClient = (project) => {
    if (project.title.includes(project.client)) {
      const [before, after] = project.title.split(project.client);
      return (
        <>
          {before}
          <span className="text-blue-600">{project.client}</span>
          {after}
        </>
      );
    }
    return project.title;
  };

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 bg-white rounded-2xl shadow-xl my-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
        Marcas y proyectos audiovisuales 
      </h2>
      <p className="text-center text-gray-600 text-lg mb-12">
        He participado en la creación de contenido visual y audiovisual para {new Set(clientProjects.map(p => p.client)).size} cuentas de Instagram, trabajando tanto en proyectos independientes como en proyectos desarrollados durante mi experiencia en agencias creativas.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedClient(null)}
          className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
            selectedClient === null
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        {uniqueClients.map((client) => (
          <button
            key={client}
            onClick={() => setSelectedClient(client)}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
              selectedClient === client
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {client}
          </button>
        ))}
      </div>

      {selectedClient === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              title="Haz clic para ver el carrusel"
              aria-label="Haz clic para ver el carrusel"
              className="group relative bg-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openCarousel(project)}
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 overflow-hidden">
                {project.media[0].type === 'image' ? (
                  <img
                    src={project.media[0].url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={project.media[0].url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    onLoadedMetadata={(e) => {
                      try {
                        e.target.currentTime = 1;
                      } catch (err) {
                        console.warn('Error setting video preview frame:', err);
                      }
                    }}
                  />
                )}

                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Haz clic para ver más</span>
              </div>
              </div>

              <div className="p-6">
                <span
                  className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium ${
                    project.workType === 'Agencia'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {project.workType === 'Agencia' ? 'Agencia' : 'Personal'}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base mb-4 flex items-center gap-2">

                  <span className="font-medium text-black flex items-center gap-1">
                    <FaInstagram className="text-pink-600" />
                    {project.client}
                  </span>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Texto indicador al fondo visible solo al hacer hover */}
                <p className="mt-4 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Ver galería
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-stretch">
              <div
                title="Haz clic para ver el carrusel"
                aria-label="Haz clic para ver el carrusel"
                className="group relative w-full md:w-1/2 bg-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openCarousel(project)}
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                  {project.media[0].type === 'image' ? (
                    <img
                      src={project.media[0].url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={project.media[0].url}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls={false}
                      onLoadedMetadata={(e) => {
                        try {
                          e.target.currentTime = 1;
                        } catch (err) {
                          console.warn('Error setting video preview frame:', err);
                        }
                      }}
                    />
                  )}

                  <div className="absolute inset-0 backdrop-blur-sm bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Haz clic para ver más</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4 flex items-center gap-2">
                    <span className="font-medium text-black flex items-center gap-1">
                      <FaInstagram className="text-pink-600" />
                      {project.client}
                    </span>
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {renderTitleWithClient(project)}
                </h3>
                <span
                  className={`inline-block w-fit mb-4 px-3 py-1 rounded-full text-sm font-medium ${
                    project.workType === 'Agencia'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {project.workType === 'Agencia' ? 'Proyecto de agencia' : 'Proyecto personal'}
                </span>
                <p className="text-gray-700 leading-relaxed">
                  {buildBrandNarrative(project)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <ProjectCarouselModal
          media={currentProjectMedia}
          title={currentProjectTitle}
          projectInfo={currentProjectInfo}
          onClose={closeCarousel}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
