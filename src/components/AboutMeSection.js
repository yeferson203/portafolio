import React from 'react';

const agencies = [
  {
    name: 'Vanale Studio',
    logo: 'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790741510/BLANCOMesa_de_trabajo_11_3x_dhkpuh.avif',
  },
  {
    name: 'Tera Agencia de Marketing',
    logo: 'https://res.cloudinary.com/da9zbh8zo/image/upload/v1790743499/TM_w9hetp.png',
  },
];

const AboutMeSection = () => {
  const [experienceYears, setExperienceYears] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const values = [
    'Creatividad con criterio',
    'Técnica y visualización',
    'Comunicación con propósito',
  ];

  React.useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  React.useEffect(() => {
    if (!isVisible) return undefined;

    let startTime = null;
    let frameId;
    const duration = 1400;

    const animateCount = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setExperienceYears(Math.round(progress * 3));

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCount);
      }
    };

    frameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible]);

  const entranceClass = isVisible ? 'animate-fade-in' : 'fade-in-pending';
  const cardEntranceClass = isVisible ? 'animate-slide-in-right' : 'slide-in-right-pending';

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 font-[Manrope] sm:py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.16),_rgba(255,255,255,0)_60%)]" />

      <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative flex flex-col justify-center rounded-[1.75rem] border border-slate-200 bg-white bg-[radial-gradient(ellipse_at_bottom_right,_rgba(96,165,250,0.24),_rgba(255,255,255,0)_68%)] p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] transition-transform duration-500 hover:-translate-y-1 sm:p-8 lg:p-10">
          <p className={`mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600 ${entranceClass}`} style={{ animationDelay: '0ms' }}>
            Yo soy
          </p>

          <h2 className={`max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl ${entranceClass}`} style={{ animationDelay: '100ms' }}>
            Yeferson <span className="text-blue-600">Martínez</span>
          </h2>

          <p className={`mt-6 max-w-lg text-base leading-relaxed text-slate-600 ${entranceClass}`} style={{ animationDelay: '200ms' }}>
            Ingeniero de sistemas, productor y postproductor visual con enfoque en contenido digital, identidad de marca y experiencias que dejan una impresión real.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {values.map((value, index) => (
              <span
                key={value}
                className={`about-value-text text-sm font-semibold text-slate-700 ${entranceClass}`}
                style={{ animationDelay: `${300 + index * 120}ms` }}
              >
                {value}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className={`inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/60 ${entranceClass}`} style={{ animationDelay: '660ms' }}>
              <span className="text-4xl font-black leading-none text-blue-600">+{experienceYears}</span>
              <span className="text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-slate-500">
                años de experiencia
              </span>
            </div>

            <div className={`w-fit rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/60 ${entranceClass}`} style={{ animationDelay: '760ms' }}>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">Agencias</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {agencies.map((agency, index) => (
                  <React.Fragment key={agency.name}>
                    {index > 0 && <span className="h-7 w-px bg-slate-200" aria-hidden="true" />}
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950 p-1.5 shadow-sm">
                        <img src={agency.logo} alt={`Logo de ${agency.name}`} className="h-full w-full object-contain" />
                      </span>
                      <span className="max-w-[7rem] text-[10px] font-semibold leading-tight text-slate-700">
                        {agency.name}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:border-l lg:border-slate-200 lg:pl-10">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 ${entranceClass}`} style={{ animationDelay: '180ms' }}>
            ¿Qué hago?
          </p>
          <h3 className={`mt-3 text-2xl font-extrabold leading-tight text-slate-900 ${entranceClass}`} style={{ animationDelay: '280ms' }}>
            Transformo ideas en presencia visual.
          </h3>

          <div className="mt-7 space-y-4">
            <div className={`${cardEntranceClass} grid gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.4)] transition-colors duration-300 hover:border-blue-200 sm:grid-cols-[2.5rem_1fr] sm:gap-4`} style={{ animationDelay: '400ms' }}>
              <p className="text-xs font-bold text-blue-600">01</p>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Producción audiovisual</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Desarrollo contenido en video, fotografía y edición para marcas que quieren impactar.</p>
              </div>
            </div>

            <div className={`${cardEntranceClass} grid gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.4)] transition-colors duration-300 hover:border-blue-200 sm:grid-cols-[2.5rem_1fr] sm:gap-4`} style={{ animationDelay: '540ms' }}>
              <p className="text-xs font-bold text-blue-600">02</p>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Postproducción audiovisual</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Edición de video, color grading y sound design para pulir cada pieza y darle un acabado cinematográfico.</p>
              </div>
            </div>

            <div className={`${cardEntranceClass} grid gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.4)] transition-colors duration-300 hover:border-blue-200 sm:grid-cols-[2.5rem_1fr] sm:gap-4`} style={{ animationDelay: '680ms' }}>
              <p className="text-xs font-bold text-blue-600">03</p>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Desarrollo web</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Diseño y desarrollo de sitios web con enfoque en experiencia de usuario, optimización y presencia digital.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
