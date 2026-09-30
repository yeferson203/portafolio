import React, { useState, useMemo } from 'react';
import { FaImages, FaInstagram } from 'react-icons/fa';
import { clientProjects } from '../mock/clientProjects';
import ProjectCarouselModal from './ProjectCarouselModal';
import Flag from 'react-world-flags';

const defaultAgencyLogo = 'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790741510/BLANCOMesa_de_trabajo_11_3x_dhkpuh.avif';

const PortfolioVideoPreview = ({ src, className }) => {
  const videoRef = React.useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '420px 0px' });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const seekToPreviewFrame = (event) => {
    try {
      event.currentTarget.currentTime = 1;
    } catch (error) {
      console.warn('Error setting video preview frame:', error);
    }
  };

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className={className}
      muted
      loop
      playsInline
      preload={shouldLoad ? 'metadata' : 'none'}
      controls={false}
      onLoadedMetadata={seekToPreviewFrame}
    />
  );
};

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
    const customNarrative = project.customNarrative || '';
    const narrativeCutoff = customNarrative.search(/,\s*(?:fue un proyecto|participé en)/i);

    setCurrentProjectMedia(project.media);
    setCurrentProjectTitle(project.title);
    setCurrentProjectInfo({
      client: project.client,
      country: project.country,
      agencyLogo: project.agencyLogo,
      brandDescription: narrativeCutoff === -1
        ? customNarrative.trim()
        : customNarrative.slice(0, narrativeCutoff).trim(),
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
    <section className="mx-auto max-w-7xl px-6 py-16 font-[Manrope] sm:py-24 lg:px-10">
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
        .carrusel-container:hover .animate-scroll-brands {
          animation-play-state: paused;
        }
        .brand-button {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .brand-button:hover {
          transform: translateY(-1px) scale(1.04);
          background-color: #0f172a !important;
          color: #fff !important;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
          z-index: 20;
          position: relative;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes portfolioTextReveal {
          from {
            clip-path: inset(0 100% 0 0);
            opacity: 0.35;
          }
          to {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }
        .portfolio-text-reveal {
          animation: portfolioTextReveal 850ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-text-reveal {
            animation: none;
            clip-path: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="relative mb-12">
      {selectedClient === null && (
        <div className="mb-10 grid gap-6 border-b border-gray-200 pb-10 text-left lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
         
          <h1 className="portfolio-text-reveal max-w-2xl text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl lg:text-6xl" style={{ animationDelay: '80ms' }}>
            Marcas y proyectos con <span className="text-blue-600">impacto visual</span>
          </h1>
          <p className="portfolio-text-reveal mt-2 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:ml-auto" style={{ animationDelay: '220ms' }}>
            He participado en la creación de contenido visual y audiovisual para {new Set(clientProjects.map(p => p.client)).size} marcas, combinando estrategia, creatividad y ejecución para dar vida a historias memorables.
          </p>
        </div>
      )}

      <div className="flex flex-col items-start gap-6">
        
        {selectedClient === null ? (
          <>
            {!showAllBrands ? (
              <div className="carrusel-container relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden py-2">
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#f4f6f8] to-transparent sm:w-24"></div>
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#f4f6f8] to-transparent sm:w-24"></div>

                <div className="flex gap-3 animate-scroll-brands w-max">
                  {duplicatedClients.map((client, index) => (
                    <button
                      key={`${client}-${index}`}
                      onClick={() => setSelectedClient(client)}
                      className="brand-button whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm"
                    >
                      <span className="portfolio-text-reveal inline-block" style={{ animationDelay: `${Math.min(index * 20, 360)}ms` }}>{client}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 flex-wrap justify-center gap-3 px-6 sm:px-10 lg:px-16">
                {uniqueClients.map((client, index) => (
                  <button
                    key={client}
                    onClick={() => setSelectedClient(client)}
                    className="rounded-full border border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg"
                  >
                    <span className="portfolio-text-reveal inline-block" style={{ animationDelay: `${Math.min(index * 25, 400)}ms` }}>{client}</span>
                  </button>
                ))}
              </div>
            )}

            <button
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="inline-flex items-center gap-2 self-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg"
          >
            <span className="portfolio-text-reveal inline-block">{showAllBrands ? 'Ver menos' : 'Ver todas las marcas'}</span>
            <svg 
              className={`h-4 w-4 transition-transform duration-300 ${showAllBrands ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          </>
        ) : (
          <div className="flex w-full items-end justify-between gap-6 border-b border-gray-200 pb-6">
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Marca seleccionada</p>
              <h2 className="portfolio-text-reveal break-words text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl">
                {selectedClient}
              </h2>
            </div>
            <button
              onClick={handleResetFilter}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-950 hover:text-white hover:shadow-lg"
            >
              <span className="portfolio-text-reveal inline-block">Ver más</span>
              <svg className="h-4 w-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl">
      {selectedClient === null ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
              <div
                key={index}
                title="Haz clic para ver el carrusel"
                aria-label="Haz clic para ver el carrusel"
                className="group relative aspect-[4/5] min-h-[340px] cursor-pointer overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-slate-900 shadow-[0_20px_48px_-24px_rgba(15,23,42,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_70px_-28px_rgba(15,23,42,0.55)]"
                onClick={() => openCarousel(project)}
              >
              <div className="absolute inset-0">
                {project.media[0].type === 'image' ? (
                  <img
                    src={project.media[0].url}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <PortfolioVideoPreview
                    src={project.media[0].url}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/5 transition-opacity duration-500 group-hover:from-slate-950/90" />

              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
                <span className="rounded-full border border-white/30 bg-slate-950/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  <span className="portfolio-text-reveal inline-block" style={{ animationDelay: `${Math.min(index * 60, 420)}ms` }}>{project.workType === 'Agencia' ? 'En Agencia' : 'Personal'}</span>
                </span>
                {project.country && (
                  <Flag
                    code={project.country}
                    style={{ width: '22px', height: '16px', borderRadius: '3px', display: 'inline-block', boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
                    title="País de la marca"
                  />
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="portfolio-text-reveal mb-3 text-xl font-extrabold leading-tight text-white sm:text-2xl" style={{ animationDelay: `${Math.min(index * 60 + 100, 520)}ms` }}>
                  {project.title}
                </h3>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/85">
                  <FaInstagram className="shrink-0 text-pink-300" />
                  <span className="portfolio-text-reveal inline-block" style={{ animationDelay: `${Math.min(index * 60 + 180, 600)}ms` }}>{project.client}</span>
                </p>
                <p className="portfolio-text-reveal line-clamp-3 text-sm leading-relaxed text-white/75" style={{ animationDelay: `${Math.min(index * 60 + 260, 680)}ms` }}>
                  {project.description}
                </p>

                <div className="mt-4 flex items-center border-t border-white/20 pt-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg shadow-slate-950/20 transition-colors duration-300 group-hover:border-blue-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FaImages className="h-4 w-4 text-blue-600 transition-colors group-hover:text-white" />
                    Ver galería
                  </span>
                </div>
              </div>
              </div>
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <article key={index} className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_75px_-38px_rgba(15,23,42,0.5)] lg:grid-cols-[1.08fr_0.92fr]">
              <div
                title="Haz clic para ver el carrusel"
                aria-label="Haz clic para ver el carrusel"
                className="group relative min-h-[320px] cursor-pointer overflow-hidden bg-slate-950 sm:min-h-[430px]"
                onClick={() => openCarousel(project)}
              >
                <div className="absolute inset-0">
                  {project.media[0].type === 'image' ? (
                    <img
                      src={project.media[0].url}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <PortfolioVideoPreview
                      src={project.media[0].url}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-5 py-3 text-xs font-bold text-slate-900 shadow-xl backdrop-blur-md transition-colors duration-300 group-hover:border-blue-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FaImages className="h-4 w-4 text-blue-600 transition-colors group-hover:text-white" />
                  Ver galería
                </span>
              </div>

              <div className="relative flex flex-col justify-center overflow-hidden bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-7 flex flex-wrap items-center gap-3">
                    <span className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${project.workType === 'Agencia' ? 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200' : 'border-blue-300/25 bg-blue-300/10 text-blue-200'}`}>
                      {project.workType === 'Agencia' ? 'Realizado en agencia' : 'Realizado de forma independiente'}
                    </span>
                    {project.workType === 'Agencia' && (
                      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-black p-1 shadow-sm">
                        <img
                          src={project.agencyLogo || defaultAgencyLogo}
                          alt="Logo de la agencia"
                          className="h-full w-full object-contain"
                        />
                      </span>
                    )}
                    {project.country && (
                      <Flag
                        code={project.country}
                        style={{ width: '22px', height: '16px', borderRadius: '3px', display: 'inline-block', boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
                        title="País de la marca"
                      />
                    )}
                  </div>

                  <h3 className="portfolio-text-reveal mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl" style={{ animationDelay: `${Math.min(index * 80 + 100, 500)}ms` }}>
                    {renderTitleWithClient(project)}
                  </h3>

                  <p className="mb-6 flex items-center gap-2 border-b border-white/15 pb-6 text-sm font-semibold text-slate-300">
                    <FaInstagram className="shrink-0 text-pink-300" />
                    <span className="portfolio-text-reveal inline-block" style={{ animationDelay: `${Math.min(index * 80 + 180, 580)}ms` }}>{project.client}</span>
                  </p>

                  <p className="portfolio-text-reveal text-base leading-relaxed text-slate-300" style={{ animationDelay: `${Math.min(index * 80 + 260, 660)}ms` }}>
                    {buildBrandNarrative(project)}
                  </p>
                </div>
              </div>
            </article>
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