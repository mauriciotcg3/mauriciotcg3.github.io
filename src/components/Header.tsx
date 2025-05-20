import { useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container-padding max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            LeadCapture
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">
              Como funciona
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Depoimentos
            </a>
            <button className="btn-primary">
              Comece agora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 py-4 border-t md:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#beneficios" 
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a 
                  href="#como-funciona" 
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <button 
                  className="btn-primary w-full"
                  onClick={toggleMobileMenu}
                >
                  Comece agora
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}; 