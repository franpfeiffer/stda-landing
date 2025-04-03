import { Link } from 'react-router-dom';

export default function Epoc() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative gradient-epoc text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EPOC
            </h1>
            <p className="text-2xl font-medium mb-2">
              <strong>E</strong>nfermedad <strong>P</strong>ulmonar <strong>O</strong>bstructiva <strong>C</strong>rónica
            </p>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>

      {/* What is EPOC Section */}
      <section id="significadoEpoc" className="py-20 bg-yellow-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-10 lg:mb-0 pr-0 lg:pr-16">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                ¿Qué es la EPOC?
              </h2>
              <p className="text-xl text-gray-800 mb-6">
                La Enfermedad Pulmonar Obstructiva Crónica es un <strong>trastorno pulmonar progresivo y generalmente</strong> no reversible.
              </p>
              <p className="text-gray-700">
                Se caracteriza por la presencia de una obstrucción en las vías aéreas que dificulta la normal respiración.
                En la mayoría de los casos, es producida por la exposición al humo del tabaco.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                src="https://ext.same-assets.com/765921102/2796292814.png"
                alt="Pulmón Asma"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
      </section>

      {/* Evaluation Section */}
      <section id="evaluaEpoc" className="py-20 bg-teal-500 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-10 lg:mb-0 pr-0 lg:pr-16">
              <h2 className="text-3xl font-semibold mb-6">
                Evaluá tu EPOC
              </h2>
              <h3 className="text-xl font-medium mb-4">
                Realizá el Test de Evaluación la EPOC (CAT)
              </h3>
              <p className="mb-8">
                Este te ayudará a medir el impacto que la enfermedad está teniendo en tu bienestar y en tu vida diaria.
                No te olvides de compartir la puntuación con tu médico para que pueda ayudarte a mejorar el manejo de la EPOC
                y obtener el máximo beneficio del tratamiento.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.catestonline.org/patient-site-test-page-spanish-la.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  HACÉ EL TEST ONLINE
                </a>
                <a
                  href="https://stda.com.ar/wp-content/uploads/2024/05/Spanish_Latin_America_CAT_combined.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-teal-700 transition-colors"
                >
                  DESCARGÁ EL TEST ONLINE
                </a>
              </div>
            </div>
            <div className="lg:w-1/3">
              <img
                src="https://ext.same-assets.com/765921102/2115110031.png"
                alt="Consulta médica Epoc"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>

      {/* CTA Section */}
      <section id="pulmonesEpoc" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Si te cuesta respirar, podría ser EPOC.<br />
            Escuchá a tus pulmones.
          </h2>
          <div className="mt-8">
            <iframe
              className="mx-auto w-full max-w-2xl h-64 md:h-96"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video if needed
              title="EPOC Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-12">
            <Link
              to="/especialistas"
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              CONSULTÁ CON UN ESPECIALISTA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
