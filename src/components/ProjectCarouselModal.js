import React, { useState, useEffect } from 'react';

const ProjectCarouselModal = ({ media, title, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold z-10"
        >
          &times;
        </button>
        <div className="p-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
            {title}
          </h3>
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {media[currentIndex].type === 'image' ? (
              <img
                src={media[currentIndex].url}
                alt={`Imagen ${currentIndex + 1} de ${title}`}
                className="w-full h-96 object-contain rounded-lg"
                onLoad={() => setLoading(false)}
              />
            ) : (
              <video
              key={media[currentIndex].url}
              controls
              autoPlay
              muted
              playsInline // 👈 importante para iOS
              preload="auto"
              className={`w-full h-96 object-contain rounded-lg transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
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
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors z-20"
                >
                  &#10094;
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors z-20"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {media.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? 'bg-black' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarouselModal;
