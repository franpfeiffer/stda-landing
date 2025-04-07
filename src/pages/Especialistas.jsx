export default function Especialistas() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Background-Especialistas-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <div className="container mx-auto px-6 pt-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Buscador de especialistas
            </h1>
            <p className="text-xl text-blue-900">
              Encontrá el profesional que más se adapte a tus necesidades.
            </p>
          </div>
          {/* Specialists Cards */}
          <div className="mt-12">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Neumonólogos Card */}
              <div className="bg-transparent border-2 border-blue-900 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-[#024A9E] mb-6">Neumonólogos</h3>
                <p className="text-[#024A9E] mb-8">
                  Ubicá a los especialistas en Neumonología en la Asociación <strong>Argentina de Medicina Respiratoria (AAMR)</strong>.
                </p>
                <a
                  href="https://www.aamr.org.ar/comunidad/busque_neumonologo.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  BUSCAR
                  <img
                      src="https://ext.same-assets.com/765921102/2293045374.svg"
                      alt=""
                      className="w-5 h-5 ml-2"
                  />
                </a>
                <p className="text-sm text-[#024A9E] mt-4">
                  *Al hacer click, será redireccionado al sitio de la AAMR.
                </p>
              </div>
              {/* Alergólogos Card */}
              <div className="bg-blue-800 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-white mb-6">Alergólogos</h3>
                <p className="text-white mb-8">
                  Ubicá a los especialistas en alergia en la Asociación <strong>Argentina de Alergia e Inmunología Clínica (AAeIC)</strong>.
                </p>
                <a
                  href="https://www.alergia.org.ar/index.php/ubique-un-alergologo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  BUSCAR
                  <img
                    src="https://ext.same-assets.com/765921102/655216695.svg"
                    alt=""
                    className="w-5 h-5 ml-2"
                  />
                </a>
                <p className="text-sm text-blue-200 mt-4">
                  *Al hacer click, será redireccionado al sitio de la AAAeIC.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>
    </div>
  );
}
