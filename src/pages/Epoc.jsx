export default function Epoc() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center overflow-hidden" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Background-Header-Epoc.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

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
      <section id="significadoEpoc" className="h-screen relative flex items-center overflow-hidden" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundQueesEpoc.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center text-[#024AA0]">
            <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-16">
              <h2 className="text-3xl font-semibold mb-6">
                ¿Qué es la EPOC?
              </h2>
              <p className="text-3xl mb-6">
                La Enfermedad Pulmonar Obstructiva Crónica es un <strong>trastorno pulmonar progresivo y generalmente</strong> no reversible.
              </p>
              <p className="font-bold">
                Se caracteriza por la presencia de una obstrucción en las vías aéreas que dificulta la normal respiración.
                En la mayoría de los casos, es producida por la exposición al humo del tabaco.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                src="https://ext.same-assets.com/765921102/2796292814.png"
                alt="Pulmón Asma"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section id="evaluaEpoc" className="h-screen flex items-center text-white relative overflow-hidden" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundEvaluaEpoc.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 pr-12">
              <img
                  src="https://ext.same-assets.com/765921102/2115110031.png"
                  alt="Consulta médica Epoc"
                  className="w-full"
              />
          </div>
            <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-32">
              <h2 className="text-3xl font-bold mb-6">
                Evaluá tu EPOC
              </h2>
              <h3 className="text-2xl font-medium mb-4">
                Realizá el Test de Evaluación la EPOC (CAT)
              </h3>
              <p className="mb-8 font-bold">
                Este te ayudará a medir el impacto que la enfermedad está teniendo en tu bienestar y en tu vida diaria.
                No te olvides de compartir la puntuación con tu médico para que pueda ayudarte a mejorar el manejo de la EPOC
                y obtener el máximo beneficio del tratamiento.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.catestonline.org/patient-site-test-page-spanish-la.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EF75CA] text-white font-bold px-6 py-3 rounded-full hover:bg-[#F3A6DC] transition-colors"
                >
                  HACÉ EL TEST ONLINE
                </a>
                <a
                  href="https://stda.com.ar/wp-content/uploads/2024/05/Spanish_Latin_America_CAT_combined.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EF75CA] text-white font-bold px-6 py-3 rounded-full hover:bg-[#F3A6DC] transition-colors"
                >
                  DESCARGÁ EL TEST ONLINE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>

      {/* CTA Section */}
        <section id="pulmonesEpoc" className="h-screen flex items-center text-white relative overflow-hidden" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundSincontrolASMA.png.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-xs">
                  {/* Video sin espacios negros a los costados usando object-fit cover y aspect-ratio */}
                  <div className="w-full" style={{ aspectRatio: "9/16" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full object-cover"
                      src="https://stda.com.ar/wp-content/uploads/2024/05/Princesa_EscuchaATusPulmones_1.mp4"
                      title="EPOC Video"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                  Si te cuesta respirar, podría ser EPOC.<br />
                  Escuchá a tus pulmones.
                </h2>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
