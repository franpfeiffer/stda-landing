import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePreloadRoutes = ({
  routes = [],
  delay = 300,
  debug = false
} = {}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const preloadRoute = (route) => {
      if (debug) console.log(`🔄 Preloading route: ${route}`);

      setTimeout(() => {
        try {
          navigate(route, {
            replace: false,
            state: { preloading: true },
            preventScrollReset: true
          });

          setTimeout(() => {
            if (debug) console.log(`✅ Preloaded route: ${route}`);
            window.history.back();
          }, 50);
        } catch (err) {
          if (debug) console.error(`❌ Failed to preload route: ${route}`, err);
        }
      }, 0);
    };

    if (document.readyState === 'complete') {
      startPreloading();
    } else {
      window.addEventListener('load', startPreloading);
      return () => window.removeEventListener('load', startPreloading);
    }

    function startPreloading() {
      if (debug) console.log('🚀 Starting route preloading...');

      routes.forEach((route, index) => {
        setTimeout(() => {
          preloadRoute(route);
        }, delay * (index + 1));
      });
    }
  }, [location.pathname, navigate, routes, delay, debug]);

  return null;
};
