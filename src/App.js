import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHeroSection from './components/HomeHeroSection';
import AboutMeSection from './components/AboutMeSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';
// No se importa index.css aquí, ya que se asume que Tailwind CSS se inyecta globalmente o se configura en el entorno de build.

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeHeroSection setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutMeSection />;
      case 'services':
        return <ServicesSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeHeroSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <LayoutHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
}

export default App;