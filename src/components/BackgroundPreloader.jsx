import { useEffect } from 'react';

export default function BackgroundPreloader() {
  useEffect(() => {
    const backgroundImages = [
      '/assets/wave-pattern.svg',
      'https://stda.com.ar/wp-content/uploads/2024/05/Heder-Guada.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/Sintomas-Guada.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/Background-autocontrol-1.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundSincontrolASMA.png.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundControlAsma1.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundControlAsma2.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundPodriaserasma.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/Background-Header-Epoc.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundQueesEpoc.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundEvaluaEpoc.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/Background-Especialistas-1.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/Background-testimonios.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundCuadrados.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundTestABC.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/2Background-quienes-somos-2.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/Background-banner-1.jpg',
      'https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado1.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado2.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado3.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/Cuadrado4-1.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma1.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma2.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma3.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/CuadardosControlAsma4.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/IlustracionCuadradosAsma.png',
      'https://stda.com.ar/wp-content/uploads/2024/05/BackgroundSincontrolASMA.png'
    ];

    backgroundImages.forEach(url => {
      if (url.endsWith('.svg')) {
        fetch(url).catch(err => console.log('Error preloading SVG:', err));
      } else {
        const img = new Image();
        img.src = url;
      }
    });

    const videos = [
      'https://stda.com.ar/wp-content/uploads/2024/05/RSS-Asma-y-Epoc-RED-FLAG_TOS.mp4',
      'https://stda.com.ar/wp-content/uploads/2024/05/Princesa_EscuchaATusPulmones_1.mp4'
    ];

    videos.forEach(url => {
      fetch(url).catch(err => console.log('Error preloading video:', err));
    });
  }, []);

  return null;
}
