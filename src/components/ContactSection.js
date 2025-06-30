import React from 'react';

const ContactSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 bg-gray-50 rounded-2xl shadow-xl my-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
        Contacto
      </h2>
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
        <p className="text-center text-gray-700 text-lg mb-8">
          ¿Listo para llevar tu marca al siguiente nivel? ¡Hablemos por WhatsApp!
        </p>

        <div className="flex justify-center">
          <a
            href="https://wa.me/573185491295?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios%20de%20dise%C3%B1o%2C%20fotograf%C3%ADa%20o%20video."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-600 transition-colors duration-300 text-center"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>


        <div className="mt-10 text-center text-gray-600">
          <p className="mb-2">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/yeferson_roserom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              {/* Icono Instagram */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.104.047 5.4 0 8.592 1.18 9.151 9.151.034.32.047.673.047 3.104s-.013 2.784-.047 3.104c-.56 7.971-3.752 9.151-9.151 9.151-.32.034-.673-.047-3.104-.047s-2.784-.013-3.104-.047c-5.4-.56-8.592-3.752-9.151-9.151-.034-.32-.047-.673-.047-3.104s.013-2.784.047-3.104c.56-5.4 3.752-8.592 9.151-9.151.32-.034.673-.047 3.104-.047zm0 2.163c-2.307 0-2.65.01-2.96.048-4.343.556-6.781 3.746-7.246 7.246-.038.31-.048.653-.048 2.96s.01 2.65.048 2.96c.464 3.499 2.902 6.69 7.246 7.246.31.038.653.048 2.96.048s2.65-.01 2.96-.048c4.343-.464 6.781-2.902 7.246-7.246.038-.31.048-.653.048-2.96s-.01-2.65-.048-2.96c-.464-4.343-2.902-6.781-7.246-7.246-.31-.038-.653-.048-2.96-.048zM12 9.535a2.465 2.465 0 100 4.93 2.465 2.465 0 000-4.93zm0 2.163a.3.3 0 110 .6.3.3 0 010-.6z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yeferson-estiven-mart%C3%ADnez-rosero-527042197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              {/* Icono LinkedIn */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
