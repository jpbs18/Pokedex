import React, { createContext, useState } from 'react'
import type { ChildrenProps, ModeContextType } from '../../types'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

const MODE_DEFAULT = {
  darkMode: false,
  setDarkMode: () => null
}
const ModeContext = createContext<ModeContextType>(MODE_DEFAULT)
export const ModeProvider = (props: ChildrenProps) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true')

  return (
      <ThemeProvider theme={ darkMode ? theme.darkMode : theme.lightMode }>
        <ModeContext.Provider value={{ darkMode, setDarkMode }}>
            { props.children }
        </ModeContext.Provider>
      </ThemeProvider>
  )
}

export default ModeContext
