import { Link } from 'react-router-dom';

export default function Asma() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="asmaTop" className="relative gradient-asma text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            El ASMA, ¿qué es?
          </h1>
          <p className="text-xl max-w-3xl">
            El asma es una enfermedad respiratoria crónica que se caracteriza por la inflamación de los bronquios.
            Esta enfermedad puede presentarse en cualquier edad y no es contagiosa. Se desencadena por muchas causas.
          </p>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-20"></div>
      </section>

      {/* Síntomas Section */}
      <section id="sintomasAsma" className="py-16 bg-green-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="lg:flex items-start">
            <div className="lg:w-2/3 mb-10 lg:mb-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                ¿Cuáles son los síntomas del ASMA?
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Los principales síntomas son <strong>falta de aire</strong>, sibilancias, opresión en el pecho y tos.
              </h3>
              <p className="text-gray-700 mb-6">
                Estos suelen producirse al realizar un ejercicio físico, por las noches, tras respirar un alérgeno
                o sustancias del medio ambiente. Los síntomas varían a lo largo del tiempo y en intensidad,
                juntamente con una limitación del flujo aéreo durante la espiración.
              </p>
            </div>
            <div className="lg:w-1/3 lg:pl-10">
              <img
                src="https://ext.same-assets.com/765921102/237851658.png"
                alt="Consulta médica Asma"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
      </section>

      {/* Desencadenantes Section */}
      <section id="desencadenantesAsma" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
            Posibles desencadenantes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/765921102/1703147609.png"
                alt="Dibujo alérgeno"
                className="w-24 h-24 mx-auto mb-4"
              />
              <p className="text-gray-700">
                Exposición a alérgenos, como los ácaros, la caspa de los animales, el polen y hongos.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/765921102/2808406191.png"
                alt="Símbolo de prohibido fumar"
                className="w-24 h-24 mx-auto mb-4"
              />
              <p className="text-gray-700">
                Exposición al humo de tabaco, contaminación o irritantes químicos.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/765921102/1763519441.png"
                alt="Ejercicios físicos con frío"
                className="w-24 h-24 mx-auto mb-4"
              />
              <p className="text-gray-700">
                El aire frío o ejercicio físico excesivo.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://ext.same-assets.com/765921102/1628680030.png"
                alt="Estructura adn hereditaria"
                className="w-24 h-24 mx-auto mb-4"
              />
              <p className="text-gray-700">
                Causas hereditarias, emociones extremas de enfado o miedo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autocontrol Section */}
      <section id="autocontrolAsma" className="py-16 bg-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="lg:flex items-center">
            <div className="lg:w-2/3 mb-10 lg:mb-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                ¿Qué es el autocontrol y el cuidado del ASMA?
              </h2>
              <p className="text-gray-700 mb-6">
                El autocontrol del asma consiste en conocer la enfermedad, los desencadenantes y saber cómo debes de actuar
                para que tu asma esté bien controlada. El autocuidado del asma consiste en las diferentes medidas
                higiénico-dietéticas que debes aplicar para evitar que tu asma pase a un mal control. Por ejemplo:
                usar la medicación todos los días, mantener limpio tu hogar, evitar mascotas si eres alérgico a ellas,
                entre otras.
              </p>
              <a
                href="https://www.asthmacontroltest.com/es-ar/welcome/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                <img
                  src="https://ext.same-assets.com/765921102/3659710888.svg"
                  alt=""
                  className="w-5 h-5 mr-2"
                />
                HACÉ EL TEST AHORA
              </a>
            </div>
            <div className="lg:w-1/3 lg:pl-10">
              <img
                src="https://ext.same-assets.com/765921102/1378056988.png"
                alt="Inhalador Asma"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
      </section>

      {/* No Control Section */}
      <section id="nocontrolAsma" className="py-16 bg-pink-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            ¿Cómo sé que mi ASMA NO está controlada?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-2xl mx-auto">
            <li>Si tenés tos, sibilancias, dificultad para respirar y/u opresión en el pecho.</li>
            <li>No podés realizar tus actividades diarias.</li>
            <li>Las pruebas de función pulmonar (las que se hacen en la consulta) están alteradas.</li>
            <li>Necesitás usar el inhalador de rescate demasiadas veces.</li>
          </ul>
        </div>
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
      </section>

      {/* Control Section */}
      <section id="controlarAsma" className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            ¿Cómo puedo ayudar a controlar mi ASMA?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <svg className="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">Usá todos los días la medicación indicada</p>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">Evitá todo lo que pueda empeorar tu asma: tabaco, polvo, mascotas, etc.</p>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">Consultá al médico si detectás un mal control del asma.</p>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">Acordá con el médico un plan escrito de acción rápida.</p>
            </div>
          </div>

          <div className="bg-pink-300 bg-opacity-30 rounded-lg p-6 mt-12 max-w-3xl mx-auto">
            <ul className="space-y-6">
              <li className="flex items-start">
                <img
                  src="https://ext.same-assets.com/765921102/451023888.svg"
                  alt=""
                  className="w-6 h-6 mr-3 flex-shrink-0"
                />
                <p>
                  Controlá la respiración utilizando esencialmente el diafragma, tomá aire por la nariz de forma lenta y vaciá suavemente el aire por la boca juntando los labios.
                </p>
              </li>
              <li className="flex items-start">
                <img
                  src="https://ext.same-assets.com/765921102/3082096435.svg"
                  alt=""
                  className="w-6 h-6 mr-3 flex-shrink-0"
                />
                <p>
                  Realizá esta respiración cuando sientas ahogo, aparezcan silbidos o te sientas cansado, te ayudará a recuperarte.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="senalesAsma" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            No dejes pasar las señales, <strong>¡podría ser ASMA!</strong>
          </h2>
          <Link
            to="/especialistas"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors mt-6"
          >
            ENCONTRÁ UN ESPECIALISTA
          </Link>
        </div>
      </section>
    </div>
  );
}
