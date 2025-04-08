class CacheService {
  constructor() {
    this.imageCache = new Map();
    this.routeCache = new Set();
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registrado con éxito:', registration.scope);
          })
          .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
          });
      });
    }
  }

  preloadImage(src) {
    if (this.imageCache.has(src)) {
      return Promise.resolve(this.imageCache.get(src));
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.imageCache.set(src, img);
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  preloadImages(sources) {
    return Promise.allSettled(sources.map(src => this.preloadImage(src)));
  }

  markRouteAsPreloaded(route) {
    this.routeCache.add(route);
  }

  isRoutePreloaded(route) {
    return this.routeCache.has(route);
  }

  preloadCriticalResources(options = {}, onProgress = () => {}) {
    const defaultOptions = {
      images: [],
      scripts: [],
      styles: []
    };

    const config = { ...defaultOptions, ...options };
    let loaded = 0;
    const total = config.images.length + config.scripts.length + config.styles.length;

    const updateProgress = () => {
      loaded++;
      onProgress(loaded, total);
    };

    const imagesPromise = this.preloadImages(config.images)
      .then(() => {
        updateProgress();
      });

    const scriptsPromises = config.scripts.map(scriptUrl => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        script.onload = () => {
          updateProgress();
          resolve();
        };
        script.onerror = () => {
          updateProgress();
          resolve();
        };
        document.head.appendChild(script);
      });
    });

    const stylesPromises = config.styles.map(styleUrl => {
      return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = styleUrl;
        link.onload = () => {
          updateProgress();
          resolve();
        };
        link.onerror = () => {
          updateProgress();
          resolve();
        };
        document.head.appendChild(link);
      });
    });

    return Promise.allSettled([
      imagesPromise,
      ...scriptsPromises,
      ...stylesPromises
    ]);
  }
}

export const cacheService = new CacheService();
export default cacheService;
