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
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">YEFF</div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => setCurrentPage(item.page)}
                className={`text-lg font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
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
