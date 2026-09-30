import React from 'react';

const ContactSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 font-[Manrope] sm:py-24 lg:px-10">
      <div className="relative isolate overflow-hidden border-y border-gray-200 py-10 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(ellipse_at_right,_rgba(191,219,254,0.55),_rgba(255,255,255,0)_70%)]" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Hablemos
            </p>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Hagamos que tu próxima idea se vea increíble.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
              Cuéntame qué tienes en mente y construyamos una dirección visual con intención.
            </p>
          </div>

          <div className="flex flex-col justify-center border-t border-gray-200 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-600">Contacto directo</p>
            <p className="max-w-md text-lg leading-relaxed text-gray-700">
              ¿Listo para llevar tu marca al siguiente nivel? Escríbeme por WhatsApp.
            </p>
            <a
              href="https://wa.me/573185491295?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios%20de%20dise%C3%B1o%2C%20fotograf%C3%ADa%20o%20video."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-gray-950 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-gray-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
            >
              Enviar mensaje por WhatsApp <span className="ml-2 text-blue-300">↗</span>
            </a>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default ContactSection;
