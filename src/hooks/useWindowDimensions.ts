import { useState, useEffect } from 'react'

const getDimensions = () => {
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getDimensions())

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getDimensions())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
