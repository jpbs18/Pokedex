import { useRef } from 'react'

const usePage = () => {
  const path = useRef(window.location.pathname)
  return path.current
}
export default usePage
