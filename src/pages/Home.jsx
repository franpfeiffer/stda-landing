import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative gradient-asma text-white pt-3 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 ">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 lg:w-[27rem]">
                Visitar al médico es la clave para mantener tu <span className="text-[#024A9E]">#AsmaBajoControl</span>
              </h1>
              <p className="font-bold text-3xl mb-6 lg:w-[27rem]">
                ¿Sabías que el Asma no debería impedirte vivir tu vida al máximo?
              </p>
              <p className="text-2xl mb-8 lg:w-[30rem]">
                Si experimentás algún síntoma o tenés dudas, consultá con tu médico/a
              </p>
              <Link
                to="/especialistas"
                className="inline-block bg-blue-900 font-bold text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                CONSULTÁ CON UN ESPECIALISTA
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <img
                src="https://ext.same-assets.com/765921102/2033970268.png"
                alt="Médico especialista"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 flex items-center bg-gray-50">
        <div className="container mx-auto max-w-[60rem] min-h-[30rem] px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-900 text-white  rounded-lg overflow-hidden" style={{
                backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9",
            }}>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Podría ser ASMA</h3>
                <Link
                  to="/asma#sintomasAsma"
                  className="inline-flex items-end bg-[#3FA7F3] p-4 rounded-full text-white hover:underline mt-24"
                >
                  CONOCÉ LOS SINTOMAS
                  <img
                      src="https://ext.same-assets.com/765921102/1998606599.svg"
                      alt=""
                      className="w-5 h-5 ml-2 text-white"
                  />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#3FA7F3] text-white rounded-lg overflow-hidden shadow-md" style={{
                backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9",
            }}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">¿Y si es EPOC?</h3>
                <Link
                  to="/epoc"
                  className="inline-flex items-center bg-[#EF75CA] p-4 rounded-full text-white hover:underline mt-24"
                >
                  <img
                    src="https://ext.same-assets.com/765921102/1367661487.svg"
                    alt=""
                    className="w-5 h-5 mr-2"
                  />
                  DESCUBRÍ MÁS
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-yellow-100 text-blue-900 rounded-lg overflow-hidden shadow-md" style={{
                backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado4-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9",
            }}>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Con un diagnóstico adecuado, tener tu #AsmaBajoControl es posible.
                </h3>
                <a
                  href="https://www.asthmacontroltest.com/es-ar/welcome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white bg-[#EF75CA] p-4 rounded-full hover:underline mt-20"
                >
                  <img
                    src="https://ext.same-assets.com/765921102/2838098675.svg"
                    alt=""
                    className="w-5 h-5 mr-2"
                  />
                  HACÉ EL TEST AHORA
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#EF75CA] text-white rounded-lg overflow-hidden shadow-md" style={{
                backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9",
            }}>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Encontrá tu<br />especialista
                </h3>
                <Link
                  to="/especialistas"
                  className="inline-flex items-center text-white bg-[#3FA7F3] p-4 rounded-full hover:underline mt-20"
                >
                  <img
                    src="https://ext.same-assets.com/765921102/2018733539.svg"
                    alt=""
                    className="w-5 h-5 mr-2"
                  />
                  BUSCAR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
        <section className="h-screen flex items-center py-20 text-white relative overflow-hidden h-screen" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/2Background-quienes-somos-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="container m-auto px-4 md:px-25 max-w-[60rem] relative z-10 flex items-center justify-center">
            <div className="lg:flex lg:items-center">
              <div className="lg:w-2/3 mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold mb-6">¿Quiénes somos?</h2>
                <p className="text-2xl font-semibold mb-6">
                  Saber te da aire es una iniciativa del laboratorio GSK para ayudar
                  en la difusión y prevención del ASMA y de la EPOC.
                </p>
                <p className="text-xl">
                  El programa busca apoyar a los pacientes con enfermedades
                  respiratorias crónicas a hacer más, sentirse mejor y vivir más
                  tiempo, brindando información relevante y certera acerca de
                  estas enfermedades y el paciente.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <img
                  src="https://ext.same-assets.com/765921102/3812192182.png"
                  alt="Personas sonriendo"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 wave-pattern opacity-20"></div>
        </section>

      {/* Endorsements Section */}
      <section className="h-screen flex items-center bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-center font-semibold text-gray-800 mb-10">
            Iniciativa avalada por:
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img
              src="https://ext.same-assets.com/765921102/1285552905.png"
              alt="Asociación Argentina de Alergia e Inmunología clínica"
              className="h-16 md:h-40"
            />
            <img
              src="https://ext.same-assets.com/765921102/135038844.png"
              alt="Sociedad de medicina interna de Buenos Aires"
              className="h-16 md:h-40"
            />
            <img
              src="https://ext.same-assets.com/765921102/62310028.png"
              alt="Asociación argentina de medicina respiratoria"
              className="h-16 md:h-40"
            />
          </div>
        </div>
      </section>

      {/* Test CTA Section */}
        <section className="py-16 relative" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Background-banner-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-6">
              ¿Y vos, tenés tu ASMA bajo control?
            </h2>
            <a
              href="https://www.asthmacontroltest.com/es-ar/welcome/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
            >
              HACÉ EL TEST AHORA
            </a>
          </div>
        </section>
      {/* Social Media Section */}
      <section className="h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            ¿Querés saber más?
          </h2>
          <p className="text-gray-600 mb-8">Seguinos en nuestras redes</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/sabertedaaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
            >
              <img
                src="https://ext.same-assets.com/765921102/1787624407.svg"
                alt=""
                className="w-5 h-5 mr-2"
              />
              Seguinos en Instagram
            </a>
            <a
              href="https://www.facebook.com/SaberTeDaAire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <img
                src="https://ext.same-assets.com/765921102/2116589346.svg"
                alt=""
                className="w-5 h-5 mr-2"
              />
              Seguinos en Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
