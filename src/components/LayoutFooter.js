import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};

export default LayoutFooter;