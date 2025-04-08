import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="gradient-footer text-white">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          {/* Logo */}
          <Link to="/" className="mb-6 lg:mb-0">
            <img
              src="https://ext.same-assets.com/765921102/2748376113.png"
              alt="Saber Te Da Aire Logo"
              className="h-16"
            />
          </Link>

          {/* Main Links */}
          <div className="flex flex-col space-y-2 mb-6 lg:mb-0">
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            <Link to="/asma" className="text-white hover:text-gray-200">Asma</Link>
            <Link to="/epoc" className="text-white hover:text-gray-200">Epoc</Link>
            <Link to="/especialistas" className="text-white hover:text-gray-200">Especialistas</Link>
            <Link to="/conoce-abc" className="text-white hover:text-gray-200">Conocé ABC</Link>
          </div>

          {/* Secondary Links */}
          <div className="flex flex-col space-y-2 mb-6 lg:mb-0">
            <Link to="/terminos-y-condiciones" className="text-white hover:text-gray-200">Términos y condiciones</Link>
            <Link to="/politica-de-privacidad" className="text-white hover:text-gray-200">Políticas de privacidad</Link>
            <a href="https://www.gsk.com/en-gb/locations/argentina/es-arg/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">Contacto</a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <p className="text-white font-medium mb-1">Seguinos:</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/SaberTeDaAire" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sabertedaaire" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.5c-1.766 0-1.984.007-2.678.039-.69.03-1.16.14-1.572.301a3.16 3.16 0 00-1.14.741 3.16 3.16 0 00-.741 1.14c-.161.411-.271.882-.301 1.572-.032.694-.039.912-.039 2.678s.007 1.984.039 2.678c.03.69.14 1.16.301 1.572.162.439.37.827.741 1.14.314.32.7.58 1.14.741.411.161.882.271 1.572.301.694.032.912.039 2.678.039s1.984-.007 2.678-.039c.69-.03 1.16-.14 1.572-.301a3.16 3.16 0 001.14-.741c.32-.313.58-.7.741-1.14.161-.411.271-.882.301-1.572.032-.694.039-.912.039-2.678s-.007-1.984-.039-2.678c-.03-.69-.14-1.16-.301-1.572a3.16 3.16 0 00-.741-1.14 3.16 3.16 0 00-1.14-.741c-.411-.161-.882-.271-1.572-.301-.694-.032-.912-.039-2.678-.039zm0 1.167c1.736 0 1.942.007 2.629.038.634.03 1.04.127 1.284.212.323.125.553.276.795.518.242.242.393.472.518.795.085.244.183.65.212 1.284.031.687.038.893.038 2.629s-.007 1.942-.038 2.629c-.03.634-.127 1.04-.212 1.284-.125.323-.276.553-.518.795-.242.242-.472.393-.795.518-.244.085-.65.183-1.284.212-.687.031-.893.038-2.629.038s-1.942-.007-2.629-.038c-.634-.03-1.04-.127-1.284-.212a2.007 2.007 0 01-.795-.518 2.007 2.007 0 01-.518-.795c-.085-.244-.183-.65-.212-1.284-.031-.687-.038-.893-.038-2.629s.007-1.942.038-2.629c.03-.634.127-1.04.212-1.284.125-.323.276-.553.518-.795.242-.242.472-.393.795-.518.244-.085.65-.183 1.284-.212.687-.031.893-.038 2.629-.038zm0 1.983a3.35 3.35 0 100 6.7 3.35 3.35 0 000-6.7zm0 5.523a2.173 2.173 0 110-4.346 2.173 2.173 0 010 4.346zm4.264-5.654a.781.781 0 00-1.563 0 .781.781 0 001.563 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400 pt-4">
          <p className="text-sm text-center lg:text-left">Copyright © 2025 GSK</p>
          <p className="text-xs mt-4 text-center lg:text-left">
            Para mayor información consulte a su médico. GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina. Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800-222-4752. NP-AR-RS-WCNT-240001
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-center lg:justify-end px-6 py-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white hover:text-gray-200 flex items-center"
        >
          <span className="mr-2">Scroll al inicio</span>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L10 4.414l-3.293 3.293a1 1 0 01-1.414 0zM10 14a1 1 0 01-1-1V5a1 1 0 112 0v8a1 1 0 01-1 1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
