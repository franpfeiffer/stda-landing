export default function Especialistas() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative gradient-specialist py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Buscador de especialistas
            </h1>
            <p className="text-xl text-blue-900">
              Encontrá el profesional que más se adapte a tus necesidades.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Neumonólogos Card */}
            <div className="bg-green-100 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Neumonólogos</h2>
              <p className="text-gray-700 mb-8">
                Ubicá a los especialistas en Neumonología en la Asociación <strong>Argentina de Medicina Respiratoria (AAMR)</strong>.
              </p>
              <a
                href="https://www.aamr.org.ar/comunidad/busque_neumonologo.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <img
                  src="https://ext.same-assets.com/765921102/2293045374.svg"
                  alt=""
                  className="w-5 h-5 mr-2"
                />
                BUSCAR
              </a>
              <p className="text-sm text-gray-600 mt-4">
                *Al hacer click, será redireccionado al sitio de la AAMR.
              </p>
            </div>

            {/* Alergólogos Card */}
            <div className="bg-blue-800 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-white mb-6">Alergólogos</h2>
              <p className="text-white mb-8">
                Ubicá a los especialistas en alergia en la Asociación <strong>Argentina de Alergia e Inmunología Clínica (AAeIC)</strong>.
              </p>
              <a
                href="https://www.alergia.org.ar/index.php/ubique-un-alergologo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <img
                  src="https://ext.same-assets.com/765921102/655216695.svg"
                  alt=""
                  className="w-5 h-5 mr-2"
                />
                BUSCAR
              </a>
              <p className="text-sm text-blue-200 mt-4">
                *Al hacer click, será redireccionado al sitio de la AAAeIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Illustrations */}
      <section className="py-10 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/071/650/original/doctor-avatar-icon-flat-style-vector.jpg"
              alt="Doctor illustration"
              className="w-32 h-auto md:w-48 opacity-90"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/142/740/original/female-doctor-avatar-icon-free-vector.jpg"
              alt="Doctor illustration"
              className="w-32 h-auto md:w-48 opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
