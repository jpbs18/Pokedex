import { Home, About } from './views'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { theme } from './theme'
import { ThemeProvider } from 'styled-components'
import { ModeContext, AppContext } from './context'
import useInitialize from './hooks/useInitialize'

const App = () => {
  const { list, setList, types } = useInitialize()
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true')
  const [noMatch, setNoMatch] = useState(false)
  const [selected, setSelected] = useState({ id: 0, isSelected: false })

  return (
        <ThemeProvider theme={darkMode ? theme.darkMode : theme.lightMode}>
            <ModeContext.Provider value={{ darkMode, setDarkMode }}>
                <AppContext.Provider value={{ list, setList, types, noMatch, setNoMatch, selected, setSelected }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </BrowserRouter>
                </AppContext.Provider>
            </ModeContext.Provider>
        </ThemeProvider>
  )
}

export default App
