import { ArrowRight } from 'lucide-react';

export default function Asma() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section id="asmaTop" className="relative h-screen flex items-center text-white overflow-hidden" style={{
                backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Heder-Guada.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        El ASMA, ¿qué es?
                    </h1>
                    <p className="text-3xl font-medium max-w-3xl">
                        El asma es una enfermedad respiratoria crónica que se caracteriza por la inflamación de los bronquios.
                        Esta enfermedad puede presentarse en cualquier edad y no es contagiosa. Se desencadena por muchas causas.
                    </p>
                </div>

                <div className="absolute inset-0 wave-pattern opacity-20"></div>
            </section>
            {/* Síntomas Section */}
            <section
                id="sintomasAsma"
                className="py-16 relative overflow-hidden"
                style={{
                    backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Sintomas-Guada.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="container h-screen flex items-center mx-auto px-6 relative z-10">
                    <div className="lg:flex items-start">
                        <div className="lg:w-1/2 lg:pr-10">
                            <img
                                src="https://ext.same-assets.com/765921102/237851658.png"
                                alt="Consulta médica Asma"
                                className="w-full"
                            />
                        </div>
                        <div className="lg:w-1/3 mb-10 items-start justify-start lg:mb-0 text-[#024A9E]">
                            <h2 className="text-3xl font-semibold mb-6">
                                ¿Cuáles son los síntomas del ASMA?
                            </h2>
                            <h3 className="text-3xl mb-6 ">
                                Los principales síntomas son <strong>falta de aire</strong>, sibilancias, opresión en el pecho y tos.
                            </h3>
                            <p className="text-md font-bold mb-6">
                                Estos suelen producirse al realizar un ejercicio físico, por las noches, tras respirar un alérgeno o sustancias del medio ambiente. Los síntomas varían a lo largo del tiempo y en intensidad, juntamente con una limitación del flujo aéreo durante la espiración.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desencadenantes Section */}
            <section id="desencadenantesAsma" className="h-screen flex items-center bg-white">
                <div className="container mx-auto px-6 max-w-6xl text-[#024A9E]">
                    <h2 className="text-3xl font-semibold mb-20 text-center">
                        Posibles desencadenantes
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="text-center">
                            <img
                                src="https://ext.same-assets.com/765921102/1703147609.png"
                                alt="Dibujo alérgeno"
                                className="w-16 h-16 lg:w-34 lg:h-34 mx-auto mb-4"
                            />
                            <p>
                                Exposición a alérgenos, como los ácaros, la caspa de los animales, el polen y hongos.
                            </p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://ext.same-assets.com/765921102/2808406191.png"
                                alt="Símbolo de prohibido fumar"
                                className="w-16 h-16 lg:w-34 lg:h-34 mx-auto mb-4"
                            />
                            <p>
                                Exposición al humo de tabaco, contaminación o irritantes químicos.
                            </p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://ext.same-assets.com/765921102/1763519441.png"
                                alt="Ejercicios físicos con frío"
                                className="w-16 h-16 lg:w-34 lg:h-34 mx-auto mb-4"
                            />
                            <p>
                                El aire frío o ejercicio físico excesivo.
                            </p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://ext.same-assets.com/765921102/1628680030.png"
                                alt="Estructura adn hereditaria"
                                className="w-16 h-16 lg:w-34 lg:h-34 mx-auto mb-4"
                            />
                            <p>
                                Causas hereditarias, emociones extremas de enfado o miedo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Autocontrol Section */}
            <section
                id="autocontrolAsma"
                className="h-screen relative overflow-hidden flex items-center"
                style={{
                    backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/Background-autocontrol-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="container mx-auto px-6 relative z-10">
                    <div className="lg:flex items-center text-[#024a9e]">
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            <h2 className="text-3xl font-semibold mb-6">
                                ¿Qué es el autocontrol y el cuidado del ASMA?
                            </h2>
                            <p className=" mb-6">
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
                                className="inline-flex items-center bg-pink-500 font-bold text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
                            >
                                <img
                                    src="https://ext.same-assets.com/765921102/3659710888.svg"
                                    alt=""
                                    className="w-5 h-5 mr-2"
                                />
                                HACÉ EL TEST AHORA
                            </a>
                        </div>
                        <div className="lg:w-1/2 lg:pl-10">
                            <img
                                src="https://ext.same-assets.com/765921102/1378056988.png"
                                alt="Inhalador Asma"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* No Control Section */}
            <section id="autocontrolAsma" className="h-screen relative overflow-hidden flex items-center" style={{ backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundSincontrolASMA.png.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
                <div className="container mx-auto px-6 relative z-10">
                    <div className="lg:flex items-center text-white">
                        <div className="lg:w-1/2 lg:pr-10">
                            <img src="https://stda.com.ar/wp-content/uploads/2024/05/BackgroundSincontrolASMA.png" alt="Inhalador Asma" className="w-full" />
                        </div>
                        <div className="lg:w-1/3 mb-10 lg:mb-0">
                            <h2 className="text-3xl font-semibold mb-6">
                                ¿Cómo se que mi ASMA NO está controlada?
                            </h2>
                            <ul className="list-disc pl-5 mb-6">
                                <li className="mb-2">Si tenés tos, sibilancias, dificultad para respirar y/u opresión en el pecho.</li>
                                <li className="mb-2">No podés realizar tus actividades diarias.</li>
                                <li className="mb-2">Las pruebas de función pulmonar (las que se hacen en la consulta) están alteradas.</li>
                                <li className="mb-2">Necesitás usar el inhalador de rescate demasiadas veces.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Control Section */}
            <section id="controlarAsma" className="text-white">
                <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
                    style={{
                        backgroundImage: 'url("https://stda.com.ar/wp-content/uploads/2024/05/BackgroundControlAsma1.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    {/* Título principal */}
                    <div className="mb-8 text-center z-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
                            ¿Como puedo ayudar a controlar mi ASMA?
                        </h1>
                    </div>
                    {/* Contenedor de tarjetas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 z-10">
                        {/* Tarjeta 1 */}
                        <div className="relative rounded-xl overflow-hidden h-[140px] md:h-[170px]">
                            <img
                                src="https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma1.png"
                                alt="Medicación indicada"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="flex items-center justify-center">
                                    <p className="text-xl md:text-3xl font-medium text-blue-700 pl-8 md:pl-12">
                                        Usá todos los días la medicación indicada
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 2 */}
                        <div className="relative rounded-xl overflow-hidden h-[140px] md:h-[170px]">
                            <img
                                src="https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma2.png"
                                alt="Evitar desencadenantes"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center p-6">
                                <div className="flex items-start">
                                    <p className="text-xl md:text-3xl font-medium text-blue-700 pl-8 md:pl-12">
                                        Evitá todo lo que pueda empeorar tu asma: tabaco, polvo, mascotas, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 3 */}
                        <div className="relative rounded-xl overflow-hidden h-[140px] md:h-[170px]">
                            <img
                                src="https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma3.png"
                                alt="Consulta médica"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center p-6">
                                <div className="flex items-start">
                                    <p className="text-xl md:text-3xl pl-8 md:pl-12 font-medium text-blue-700">
                                        Consultá al médico si detectás un mal control del asma.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 4 */}
                        <div className="relative rounded-xl overflow-hidden h-[140px] md:h-[170px]">
                            <img
                                src="https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma4.png"
                                alt="Plan de acción"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center p-6">
                                <div className="flex items-start">
                                    <p className="text-xl md:text-3xl pl-8 md:pl-12 font-medium text-blue-700">
                                        Acordá con el médico un plan escrito de acción rápida.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Círculos decorativos como en la imagen original */}
                    <div className="absolute top-1/4 left-16 w-4 h-4 rounded-full bg-blue-300 opacity-70"></div>
                    <div className="absolute bottom-16 right-16 w-8 h-8 rounded-full border-2 border-blue-300 opacity-70"></div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="senalesAsma" className="bg-white h-screen flex items-center text-white overflow-hidden"
                style={{
                    backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundControlAsma2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="bg-pink-400 font-bold rounded-md p-6 flex flex-col md:flex-row items-center max-w-3xl mx-auto" >
                    {/* Columna con imagen - ahora aparece primero en mobile */}
                    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                        <div className="relative">
                            {/* Ilustración de persona */}
                            <div className="relative">
                                <img
                                    src="https://stda.com.ar/wp-content/uploads/2024/05/IlustracionCuadradosAsma.png"
                                    alt="Persona realizando ejercicio de respiración"
                                    className="h-48 w-auto"
                                />
                                {/* Elemento de aire */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                                    <svg viewBox="0 0 50 50" className="w-16 h-16">
                                        <path
                                            d="M10,20 Q20,5 30,20 T50,20"
                                            fill="none"
                                            stroke="#98f0e7"
                                            strokeWidth="3"
                                        />
                                        <circle cx="15" cy="15" r="2" fill="#98f0e7" />
                                        <circle cx="20" cy="18" r="2" fill="#98f0e7" />
                                        <circle cx="25" cy="15" r="2" fill="#98f0e7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna con instrucciones - ahora aparece después de la imagen en mobile */}
                    <div className="w-full md:w-2/3 text-white md:pl-4">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="mr-2 mt-1">
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                                <span className="text-lg">
                                    Controlá la respiración utilizando esencialmente el diafragma, tomá aire por la nariz de forma lenta y vaciá suavemente el aire por la boca juntando los labios.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 mt-1">
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                                <span className="text-lg">
                                    Realizá esta respiración cuando sientas ahogo, aparezcan silbidos o te sientas cansado, te ayudará a recuperarte.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="senalesAsma" className="bg-white h-screen flex items-center text-white overflow-hidden"
                style={{
                    backgroundImage: "url('https://stda.com.ar/wp-content/uploads/2024/05/BackgroundPodriaserasma.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="relative w-full min-h-screen flex items-center justify-center p-4">
                    {/* Main content - stacked on mobile/sm, side by side on lg+ */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-4xl">
                        {/* Text section - full width on mobile, half on lg+ */}
                        <div className="w-full lg:w-1/2 text-center text-[#024A9E] text-xl sm:text-3xl font-medium mb-6 lg:mb-0">
                            <h2>No dejes pasar las señales, <span className="font-bold">¡podría ser ASMA!</span></h2>
                        </div>

                        {/* Video section - full width on mobile, half on lg+ */}
                        <div className="w-full lg:w-1/2 max-w-md mx-auto">
                            <div className="w-full max-w-xl mx-auto my-4 relative z-10 px-4">
                                <video
                                    className="w-full h-full object-cover"
                                    src="https://stda.com.ar/wp-content/uploads/2024/05/RSS-Asma-y-Epoc-RED-FLAG_TOS.mp4"
                                    autoPlay
                                    loop
                                    muted
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
