import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const robotoLink = document.createElement('link');
robotoLink.rel = 'preload';
robotoLink.as = 'style';
robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';
robotoLink.onload = function() { this.rel = 'stylesheet' };
document.head.appendChild(robotoLink);

const preloadCriticalAssets = () => {
  const criticalImages = [
    'https://ext.same-assets.com/765921102/4265005190.png',
    'https://ext.same-assets.com/765921102/2748376113.png'
  ];

  criticalImages.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });

  const waveSvg = document.createElement('link');
  waveSvg.rel = 'preload';
  waveSvg.as = 'image';
  waveSvg.href = '/assets/wave-pattern.svg';
  waveSvg.type = 'image/svg+xml';
  document.head.appendChild(waveSvg);
};

preloadCriticalAssets();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
