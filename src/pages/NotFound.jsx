import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Página no encontrada
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
