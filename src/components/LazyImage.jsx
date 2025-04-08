import { useState, useEffect } from 'react';

export default function LazyImage({ src, alt, className, preload = false, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (preload) {
      setIsLoaded(true);
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };

    return () => {
      img.onload = null;
    };
  }, [src, preload]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'image-lazy-loaded' : 'image-lazy-load'}`}
      {...props}
    />
  );
}
