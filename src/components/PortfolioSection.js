import React, { useState, useMemo } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { clientProjects } from '../mock/clientProjects';
import ProjectCarouselModal from './ProjectCarouselModal';
import Flag from 'react-world-flags';

const PortfolioSection = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectMedia, setCurrentProjectMedia] = useState([]);
  const [currentProjectTitle, setCurrentProjectTitle] = useState('');
  const [currentProjectInfo, setCurrentProjectInfo] = useState(null);

  const [showAllBrands, setShowAllBrands] = useState(false);

  const uniqueClients = [...new Set(clientProjects.map(project => project.client))];

  const duplicatedClients = useMemo(() => [...uniqueClients, ...uniqueClients], [uniqueClients]);

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
  // 🔑 Si el proyecto trae una narrativa personalizada, se devuelve tal cual
  if (project.customNarrative) {
    return project.customNarrative;
  }

  // 👇 Si no, se usa la lógica automática de siempre
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

  const handleResetFilter = () => {
    setSelectedClient(null);
  };

  return (
    <section className="w-full px-4 py-10 overflow-hidden">
      
      {/* Estilos CSS para la animación del carrusel */}
      <style>{`
        @keyframes scrollBrands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-brands {
          animation: scrollBrands 30s linear infinite;
        }
        /* Pausa el carrusel al pasar el mouse sobre cualquier parte del contenedor */
        .carrusel-container:hover .animate-scroll-brands {
          animation-play-state: paused;
        }
        /* Efecto de agrandado y cambio de color en la marca individual al hacer hover */
        .brand-button {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .brand-button:hover {
          transform: scale(1.15);
          background-color: #000 !important;
          color: #fff !important;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          z-index: 20;
          position: relative;
        }
        /* Muestra un pequeño tooltip al hacer hover 
        .brand-button:hover::after {
          content: 'Clic para filtrar';
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #1f2937;
          color: #fff;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0.95;
        }*/
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-14 sm:py-16 bg-white border border-gray-200 rounded-3xl shadow-sm">
      {selectedClient === null && (
        <>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Marcas y proyectos audiovisuales 
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-10">
            He participado en la creación de contenido visual y audiovisual para {new Set(clientProjects.map(p => p.client)).size} cuentas de Instagram, trabajando tanto en proyectos independientes como en proyectos desarrollados durante mi experiencia en agencias creativas.
          </p>
        </>
      )}

      <div className="flex flex-col items-center gap-6">
        
        {selectedClient === null ? (
          <>
            {!showAllBrands ? (
              // CARRUSEL AUTOMÁTICO
              <div className="carrusel-container w-full max-w-4xl overflow-hidden relative py-2">
                
                {/* Degradados laterales para suavizar la entrada/salida */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                
                {/* Indicador visual: texto que aparece solo al hacer hover sobre el carrusel */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 transition-opacity duration-300 pointer-events-none z-20 carrusel-hint">
                  ⏸ Pausado
                </div>
                
                <div className="flex gap-3 animate-scroll-brands w-max">
                  {duplicatedClients.map((client, index) => (
                    <button
                      key={`${client}-${index}`}
                      onClick={() => setSelectedClient(client)}
                      className="brand-button px-5 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 whitespace-nowrap flex-shrink-0"
                    >
                      {client}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // TODAS LAS MARCAS EN GRID ESTÁTICO
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
                {uniqueClients.map((client) => (
                  <button
                    key={client}
                    onClick={() => setSelectedClient(client)}
                    className="px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg"
                  >
                    {client}
                  </button>
                ))}
              </div>
            )}

            <button
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="px-6 py-2.5 rounded-full text-sm font-medium 
                      bg-white text-gray-900 border border-gray-300 
                      shadow-sm
                      transition-all duration-300 ease-in-out
                      hover:bg-black hover:text-white hover:scale-110 
                      hover:shadow-xl hover:border-black
                      flex items-center gap-2"
          >
            {showAllBrands ? 'Ver menos' : 'Ver todas las marcas'}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAllBrands ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          </>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 bg-black text-white shadow-md cursor-default"
            >
              {selectedClient}
            </button>
            <button
              onClick={handleResetFilter}
              className="px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2"
            >
              Ver más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
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

                <div className="absolute inset-0 backdrop-blur-sm bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Haz clic para ver más</span>
                </div>
              </div>

              <div className="p-6">
                <span
                className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium ${
                  project.workType === 'Agencia'
                    ? 'bg-green-100 text-green-700'  // ✅ Agencia = verde
                    : 'bg-blue-100 text-blue-700'    // ✅ Personal = azul
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
                    {project.country && (
                      <Flag
                        code={project.country}
                        style={{ width: '18px', height: '13px', borderRadius: '2px', display: 'inline-block' }}
                        title="País de la marca"
                      />
                    )}
                  </span>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>

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
                      {project.country && (
                        <Flag
                          code={project.country}
                          style={{ width: '18px', height: '13px', borderRadius: '2px', display: 'inline-block' }}
                          title="País de la marca"
                        />
                      )}
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
                    ? 'bg-green-100 text-green-700'  // ✅ Agencia = verde
                    : 'bg-blue-100 text-blue-700'    // ✅ Personal = azul
                  }`}
                >
                  {project.workType === 'Agencia' ? 'Realizado en agencia' : 'Realizado de forma independiente'}
                </span>
                <p className="text-gray-700 leading-relaxed">
                  {buildBrandNarrative(project)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>

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