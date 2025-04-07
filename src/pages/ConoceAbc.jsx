export default function ConoceAbc() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Background-testimonios.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TENER EL <span className="font-extrabold">#ASMABAJOCONTROL</span> ES POSIBLE, CON UN TRATAMIENTO REGULAR
            </h1>
            <a
              href="https://www.asthmacontroltest.com/es-ar/welcome/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EF75CA] text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors mt-6"
            >
              HACÉ EL TEST AHORA
            </a>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20 z-5"></div>
      </section>

      {/* Info Cards Section  https://stda.com.ar/wp-content/uploads/2024/05/BackgroundCuadrados.jpg */}
      <section className="h-screen flex items-center bg-white" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundCuadrados.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-green-100 rounded-3xl p-6 shadow-md">
              <img
                src="https://ext.same-assets.com/765921102/3136628385.png"
                alt="Ilustración hombre tosiendo"
                className="w-32 h-32 mx-auto mb-6"
              />
              <p className="text-[#024A9E] font-semibold">
                Los síntomas del asma pueden interferir en tu vida cotidiana y hasta
                pueden aumentar gradualmente sin que siquiera lo notes.<sup>1</sup><br />
                En poco tiempo las sibilancias, cuando hacés ejercicio o el despertarse
                a la noche con opresión en el pecho, se vuelve normal.<sup>2</sup>
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-yellow-100 rounded-3xl p-6 shadow-md">
              <img
                src="https://ext.same-assets.com/765921102/1138955653.png"
                alt="Ilustración mujer tosiendo"
                className="w-auto h-32 mx-auto mb-6"
              />
              <p className="text-[#024A9E] font-semibold">
                De hecho, casi 3 de cada 4 personas que piensan que su asma esta controlada,
                puede que en realidad estén ignorando los síntomas, aceptándolos como
                «normales» en lugar de hablar con el médico.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-pink-100 rounded-3xl p-6 shadow-md">
              <img
                src="https://ext.same-assets.com/765921102/1268004886.png"
                alt="Ilustración neumónologo feliz"
                className="w-auto h-32 mx-auto mb-6"
              />
              <p className="text-[#024A9E] font-semibold">
                ¿Te suena familiar? Si es así, definitivamente es hora de actuar.
                Después de todo, los síntomas pueden ser una señal de que tu asma no está
                controlada.<sup>4</sup>Así que no esperes que aparezcan, hablá con tu médico
                sobre un tratamiento diario hoy.<sup>3</sup>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="h-screen flex items-center bg-white text-white" style={{
            backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Background-testimonios.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            TESTIMONIOS DE PROFESIONALES
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-[#FEF4B8] rounded-lg p-6 shadow-md text-gray-800">
              <div className="mb-4">
                <img
                  src="https://ext.same-assets.com/765921102/2358413203.svg"
                  alt="Comillas"
                  className="w-8 h-8"
                />
              </div>
              <p className="mb-6">
                El asma es un proceso inflamatorio crónico de las vías aéreas inferiores.
                El paciente puede comenzar con síntomas como sensación de falta de aire,
                a veces acompañado de secreciones, tos seca y/o chillido en el pecho.
              </p>
              <p className="font-bold">Dr. Daniel Colodenco</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-[#FEF4B8] rounded-lg p-6 shadow-md text-gray-800">
              <div className="mb-4">
                <img
                  src="https://ext.same-assets.com/765921102/121558288.svg"
                  alt="Comillas"
                  className="w-8 h-8"
                />
              </div>
              <p className="mb-6">
                Las causas del asma son múltiples. Hay factores ambientales,
                genéticos, familiares o incluso fumar.
              </p>
              <p className="font-bold">Dra. Anahi Yañez</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen flex items-center bg-white" style={{
          backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundTestABC.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Y VOS, TENÉS TU <span className="font-bold">ASMA BAJO CONTROL</span>?
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-8">
            Si te preocupa tu asma, hablá con tu médico acerca del tratamiento diario.
            La prueba de control del asma (ACT) es una forma útil de ver como los síntomas
            del asma están afectando tu vida diaria.<sup>5</sup> Hacé click en el enlace a
            continuación para obtener el resultado en segundos y asegurate de compartirlo
            con tu médico.
          </p>
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

      {/* References Section */}
      <section className="py-6 bg-[#00A9F6]">
        <div className="container mx-auto px-6">
          <p className="text-xs text-black">
            1. Fletcher M, Hiles D. Prim Care Respir J 2013;22:431-438. / 2. Champan KR, et al. Thorax 2010;65:747-752. /3. Woodcock A, et al. Lancet 2017;290:2247-2255. / 4. GINA. Estrategia global para el manejo y la prevención del asma. Disponible en: www.ginasthma.org. Consultado en abril de 2021. / 5. Prueba de control del asma. Disponible en: http://www.asthmacontroltest.com. Último acceso abril 2021. NP-AR-FPS-WCNT-210002
          </p>
        </div>
      </section>
    </div>
  );
}
