import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmoothLink from './SmoothLink';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [asmaDropdown, setAsmaDropdown] = useState(false);
  const [epocDropdown, setEpocDropdown] = useState(false);

  return (
    <nav className="bg-white py-2 px-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://ext.same-assets.com/765921102/4265005190.png"
            alt="Saber Te Da Aire Logo"
            className="h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="relative group">
            <button
              className="px-3 py-2 flex items-center text-base font-medium text-blue-900 hover:text-blue-700"
              onClick={() => setAsmaDropdown(!asmaDropdown)}
            >
              ASMA
              <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`${asmaDropdown ? 'block' : 'hidden'} lg:absolute lg:left-0 lg:mt-2 lg:w-60 lg:shadow-lg lg:rounded-md lg:bg-white z-10`}>
              <SmoothLink to="/asma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">QUÉ ES EL ASMA?</SmoothLink>
              <SmoothLink to="/asma#sintomasAsma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SÍNTOMAS</SmoothLink>
              <SmoothLink to="/asma#desencadenantesAsma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DESENCADENANTES</SmoothLink>
              <SmoothLink to="/asma#autocontrolAsma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AUTOCONTROL Y CUIDADO</SmoothLink>
              <SmoothLink to="/asma#nocontrolAsma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">#ASMABAJOCONTROL</SmoothLink>
              <SmoothLink to="/asma#controlarAsma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CÓMO CONTROLARLO?</SmoothLink>
              <SmoothLink to="/asma#senalesAsma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEÑALES ASMA</SmoothLink>
            </div>
          </div>

          <div className="relative group">
            <button
              className="px-3 py-2 flex items-center text-base font-medium text-blue-900 hover:text-blue-700"
              onClick={() => setEpocDropdown(!epocDropdown)}
            >
              EPOC
              <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`${epocDropdown ? 'block' : 'hidden'} lg:absolute lg:left-0 lg:mt-2 lg:w-60 lg:shadow-lg lg:rounded-md lg:bg-white z-10`}>
              <SmoothLink to="/epoc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SIGNIFICADO EPOC</SmoothLink>
              <SmoothLink to="/epoc#evaluaEpoc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EVALUÁ TU EPOC</SmoothLink>
              <SmoothLink to="/epoc#pulmonesEpoc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ESCUCHÁ A TUS PULMONES</SmoothLink>
            </div>
          </div>

          <Link to="/especialistas" className="px-3 py-2 text-base font-medium text-blue-900 hover:text-blue-700">
            ESPECIALISTAS
          </Link>

          <Link to="/conoce-abc" className="ml-2 bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition-colors">
            CONOCÉ ABC
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="hidden lg:flex items-center space-x-2">
          <a href="https://www.facebook.com/SaberTeDaAire" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/sabertedaaire" target="_blank" rel="noopener noreferrer" className="text-pink-600">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.5c-1.766 0-1.984.007-2.678.039-.69.03-1.16.14-1.572.301a3.16 3.16 0 00-1.14.741 3.16 3.16 0 00-.741 1.14c-.161.411-.271.882-.301 1.572-.032.694-.039.912-.039 2.678s.007 1.984.039 2.678c.03.69.14 1.16.301 1.572.162.439.37.827.741 1.14.314.32.7.58 1.14.741.411.161.882.271 1.572.301.694.032.912.039 2.678.039s1.984-.007 2.678-.039c.69-.03 1.16-.14 1.572-.301a3.16 3.16 0 001.14-.741c.32-.313.58-.7.741-1.14.161-.411.271-.882.301-1.572.032-.694.039-.912.039-2.678s-.007-1.984-.039-2.678c-.03-.69-.14-1.16-.301-1.572a3.16 3.16 0 00-.741-1.14 3.16 3.16 0 00-1.14-.741c-.411-.161-.882-.271-1.572-.301-.694-.032-.912-.039-2.678-.039zm0 1.167c1.736 0 1.942.007 2.629.038.634.03 1.04.127 1.284.212.323.125.553.276.795.518.242.242.393.472.518.795.085.244.183.65.212 1.284.031.687.038.893.038 2.629s-.007 1.942-.038 2.629c-.03.634-.127 1.04-.212 1.284-.125.323-.276.553-.518.795-.242.242-.472.393-.795.518-.244.085-.65.183-1.284.212-.687.031-.893.038-2.629.038s-1.942-.007-2.629-.038c-.634-.03-1.04-.127-1.284-.212a2.007 2.007 0 01-.795-.518 2.007 2.007 0 01-.518-.795c-.085-.244-.183-.65-.212-1.284-.031-.687-.038-.893-.038-2.629s.007-1.942.038-2.629c.03-.634.127-1.04.212-1.284.125-.323.276-.553.518-.795.242-.242.472-.393.795-.518.244-.085.65-.183 1.284-.212.687-.031.893-.038 2.629-.038zm0 1.983a3.35 3.35 0 100 6.7 3.35 3.35 0 000-6.7zm0 5.523a2.173 2.173 0 110-4.346 2.173 2.173 0 010 4.346zm4.264-5.654a.781.781 0 00-1.563 0 .781.781 0 001.563 0z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden py-2 px-4">
          <div className="flex flex-col space-y-2">
            <div>
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-blue-900"
                onClick={() => setAsmaDropdown(!asmaDropdown)}
              >
                ASMA
                <svg
                  className={`ml-1 h-5 w-5 inline ${asmaDropdown ? 'transform rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {asmaDropdown && (
                <div className="pl-4 py-2 flex flex-col space-y-2">
                  <SmoothLink to="/asma" className="text-sm text-gray-700">QUÉ ES EL ASMA?</SmoothLink>
                  <SmoothLink to="/asma#sintomasAsma" className="text-sm text-gray-700">SÍNTOMAS</SmoothLink>
                  <SmoothLink to="/asma#desencadenantesAsma" className="text-sm text-gray-700">DESENCADENANTES</SmoothLink>
                  <SmoothLink to="/asma#autocontrolAsma" className="text-sm text-gray-700">AUTOCONTROL Y CUIDADO</SmoothLink>
                  <SmoothLink to="/asma#nocontrolAsma" className="text-sm text-gray-700">#ASMABAJOCONTROL</SmoothLink>
                  <SmoothLink to="/asma#controlarAsma" className="text-sm text-gray-700">CÓMO CONTROLARLO?</SmoothLink>
                  <SmoothLink to="/asma#senalesAsma" className="text-sm text-gray-700">SEÑALES ASMA</SmoothLink>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-blue-900"
                onClick={() => setEpocDropdown(!epocDropdown)}
              >
                EPOC
                <svg
                  className={`ml-1 h-5 w-5 inline ${epocDropdown ? 'transform rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {epocDropdown && (
                <div className="pl-4 py-2 flex flex-col space-y-2">
                  <SmoothLink to="/epoc" className="text-sm text-gray-700">SIGNIFICADO EPOC</SmoothLink>
                  <SmoothLink to="/epoc#evaluaEpoc" className="text-sm text-gray-700">EVALUÁ TU EPOC</SmoothLink>
                  <SmoothLink to="/epoc#pulmonesEpoc" className="text-sm text-gray-700">ESCUCHÁ A TUS PULMONES</SmoothLink>
                </div>
              )}
            </div>

            <Link to="/especialistas" className="px-3 py-2 text-base font-medium text-blue-900">
              ESPECIALISTAS
            </Link>

            <Link to="/conoce-abc" className="px-3 py-2 text-base font-medium bg-pink-400 text-white rounded-full text-center">
              CONOCÉ ABC
            </Link>

            <div className="flex justify-center space-x-4 pt-4">
              <a href="https://www.facebook.com/SaberTeDaAire" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sabertedaaire" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.5c-1.766 0-1.984.007-2.678.039-.69.03-1.16.14-1.572.301a3.16 3.16 0 00-1.14.741 3.16 3.16 0 00-.741 1.14c-.161.411-.271.882-.301 1.572-.032.694-.039.912-.039 2.678s.007 1.984.039 2.678c.03.69.14 1.16.301 1.572.162.439.37.827.741 1.14.314.32.7.58 1.14.741.411.161.882.271 1.572.301.694.032.912.039 2.678.039s1.984-.007 2.678-.039c.69-.03 1.16-.14 1.572-.301a3.16 3.16 0 001.14-.741c.32-.313.58-.7.741-1.14.161-.411.271-.882.301-1.572.032-.694.039-.912.039-2.678s-.007-1.984-.039-2.678c-.03-.69-.14-1.16-.301-1.572a3.16 3.16 0 00-.741-1.14 3.16 3.16 0 00-1.14-.741c-.411-.161-.882-.271-1.572-.301-.694-.032-.912-.039-2.678-.039zm0 1.167c1.736 0 1.942.007 2.629.038.634.03 1.04.127 1.284.212.323.125.553.276.795.518.242.242.393.472.518.795.085.244.183.65.212 1.284.031.687.038.893.038 2.629s-.007 1.942-.038 2.629c-.03.634-.127 1.04-.212 1.284-.125.323-.276.553-.518.795-.242.242-.472.393-.795.518-.244.085-.65.183-1.284.212-.687.031-.893.038-2.629.038s-1.942-.007-2.629-.038c-.634-.03-1.04-.127-1.284-.212a2.007 2.007 0 01-.795-.518 2.007 2.007 0 01-.518-.795c-.085-.244-.183-.65-.212-1.284-.031-.687-.038-.893-.038-2.629s.007-1.942.038-2.629c.03-.634.127-1.04.212-1.284.125-.323.276-.553.518-.795.242-.242.472-.393.795-.518.244-.085.65-.183 1.284-.212.687-.031.893-.038 2.629-.038zm0 1.983a3.35 3.35 0 100 6.7 3.35 3.35 0 000-6.7zm0 5.523a2.173 2.173 0 110-4.346 2.173 2.173 0 010 4.346zm4.264-5.654a.781.781 0 00-1.563 0 .781.781 0 001.563 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
