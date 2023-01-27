import { useState } from 'react'

const usePage = () => {
  const [path] = useState(window.location.pathname)
  return path
}
export default usePage
