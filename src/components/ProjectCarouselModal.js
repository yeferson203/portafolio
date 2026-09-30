import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import Flag from 'react-world-flags';

const ProjectCarouselModal = ({ media, title, projectInfo, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Cuando cambia la imagen, muestra el loader
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative grid max-h-[92vh] min-h-[70vh] w-full max-w-6xl grid-cols-1 overflow-y-auto rounded-[1.75rem] border border-white/15 bg-white shadow-[0_40px_120px_-35px_rgba(0,0,0,0.7)] lg:grid-cols-[minmax(0,1fr)_21rem] lg:overflow-hidden"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar galería"
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-2xl font-light text-white shadow-lg backdrop-blur transition-colors hover:bg-blue-600"
        >
          &times;
        </button>

        <div className="flex min-w-0 flex-col bg-slate-950">
          <div className="flex items-start justify-between gap-12 px-5 pb-4 pt-6 sm:px-8">
            <div className="min-w-0">
              {projectInfo?.client && (
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  <FaInstagram className="shrink-0 text-pink-400" />
                  <span className="truncate">{projectInfo.client}</span>
                  {projectInfo.country && (
                    <Flag
                      code={projectInfo.country}
                      style={{ width: '20px', height: '14px', borderRadius: '2px', flexShrink: 0 }}
                      title="País de la marca"
                    />
                  )}
                </p>
              )}
              <h3 id="project-dialog-title" className="pr-2 text-xl font-extrabold leading-tight text-white sm:text-2xl">
                {title}
              </h3>
            </div>
            <span className="mt-1 shrink-0 text-xs font-semibold tabular-nums text-slate-400">
              {String(currentIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}
            </span>
          </div>

          <div className="relative flex min-h-[48vh] flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(51,65,85,0.4),_rgba(2,6,23,1)_72%)] px-3 pb-3 sm:px-6 sm:pb-6">
            {loading && (
              <div className="absolute inset-3 z-10 flex items-center justify-center rounded-xl bg-slate-950/65 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:top-0">
                <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-blue-300/30 border-t-blue-400" />
              </div>
            )}

            {media[currentIndex].type === 'image' ? (
              <img
                src={media[currentIndex].url}
                alt={`Imagen ${currentIndex + 1} de ${title}`}
                className="h-full max-h-[64vh] w-full rounded-xl object-contain"
                onLoad={() => setLoading(false)}
              />
            ) : (
              <video
                key={media[currentIndex].url}
                controls
                autoPlay
                playsInline
                preload="auto"
                className={`h-full max-h-[64vh] w-full rounded-2xl border border-white/10 object-contain shadow-2xl transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                onLoadedData={() => setLoading(false)}
                onError={() => console.error('Error cargando video:', media[currentIndex].url)}
              >
                <source src={media[currentIndex].url} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            )}

            {media.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  aria-label="Proyecto anterior"
                  className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-xl text-white shadow-lg backdrop-blur transition-all hover:scale-105 hover:border-white/50 hover:bg-blue-600"
                >
                  &#10094;
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Proyecto siguiente"
                  className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-xl text-white shadow-lg backdrop-blur transition-all hover:scale-105 hover:border-white/50 hover:bg-blue-600"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>

          {media.length > 1 && (
            <div className="flex items-center justify-center gap-2 bg-slate-950 px-4 pb-5 pt-1">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ver elemento ${index + 1}`}
                  aria-current={currentIndex === index ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-blue-400' : 'w-1.5 bg-slate-600 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          )}
        </div>

        {projectInfo && (
          <aside className="relative flex flex-col border-t border-slate-200 bg-[linear-gradient(155deg,#ffffff_0%,#f5f8fc_100%)] p-6 sm:p-8 lg:border-l lg:border-t-0">
            <div className="mb-8 h-1 w-12 rounded-full bg-blue-600" />
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Marca</p>
            {projectInfo.brandDescription && (
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                {projectInfo.brandDescription}
              </p>
            )}

            {projectInfo.client && (
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <FaInstagram className="shrink-0 text-pink-600" />
                {projectInfo.client}
              </p>
            )}

            <div className="mb-6 flex items-center gap-2">
              <span
                className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${
                projectInfo.workType === 'Agencia'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-blue-200 bg-blue-50 text-blue-700'
                }`}
              >
                {projectInfo.workType === 'Agencia'
                  ? 'Realizado en agencia'
                  : 'Realizado de forma independiente'}
              </span>
              {projectInfo.workType === 'Agencia' && (
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950 p-1 shadow-sm">
                  <img
                    src={projectInfo.agencyLogo || 'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790741510/BLANCOMesa_de_trabajo_11_3x_dhkpuh.avif'}
                    alt="Logo de la agencia"
                    className="h-full w-full object-contain"
                  />
                </span>
              )}
            </div>

          </aside>
        )}
      </div>
    </div>
  );
};

export default ProjectCarouselModal;