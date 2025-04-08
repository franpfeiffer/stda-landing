import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Asma from '../pages/Asma';
import Epoc from '../pages/Epoc';
import Especialistas from '../pages/Especialistas';
import ConoceAbc from '../pages/ConoceAbc';
import NotFound from '../pages/NotFound';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const preloadImagesFromComponent = (component) => {
      const tempDiv = document.createElement('div');
      tempDiv.style.display = 'none';
      document.body.appendChild(tempDiv);

      try {
        const componentString = JSON.stringify(component);
        const imgRegex = /https:\/\/[^"']*\.(png|jpg|jpeg|svg|gif)/g;
        const imageUrls = componentString.match(imgRegex) || [];

        imageUrls.forEach(url => {
          const img = new Image();
          img.src = url;
        });
      } catch (error) {
        console.error('Error preloading component:', error);
      }

      document.body.removeChild(tempDiv);
    };

    const preloadAllComponents = async () => {
      try {
        const components = [
          <Home />,
          <Asma />,
          <Epoc />,
          <Especialistas />,
          <ConoceAbc />,
          <NotFound />
        ];

        components.forEach(preloadImagesFromComponent);

        const criticalAssets = [
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
          'https://stda.com.ar/wp-content/uploads/2024/05/Background-banner-1.jpg'
        ];

        criticalAssets.forEach(url => {
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

        setIsLoading(false);
      } catch (error) {
        console.error('Error in preloading:', error);
        setIsLoading(false);
      }
    };

    preloadAllComponents();
  }, []);

  return isLoading && location.pathname === '/' ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute top-0 w-full h-full rounded-full border-4 border-t-[#024A9E] border-r-[#024A9E] border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <p className="text-[#024A9E] font-medium">Cargando...</p>
      </div>
    </div>
  ) : null;
}
