import { useState, useEffect } from 'react';

const getDimensions = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}