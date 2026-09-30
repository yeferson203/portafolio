import React, { useState } from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Sobre Mí', page: 'about' },
    { name: 'Servicios', page: 'services' },
    { name: 'Portafolio', page: 'portfolio' },
    { name: 'Contacto', page: 'contact' },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/80 bg-white/85 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-gray-950"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          YEFF
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => setCurrentPage(item.page)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'bg-gray-950 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-950'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900" aria-label="Abrir menú">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsOpen(false); // cerrar el menú al hacer clic
                }}
                className={`block w-full text-left text-lg font-medium py-2 ${
                  currentPage === item.page
                    ? 'text-black border-l-4 pl-2 border-black'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default LayoutHeader;
