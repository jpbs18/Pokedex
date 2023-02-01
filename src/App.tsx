import React from 'react'
import Routing from './routing'
import GlobalProvider from './context'
const App = () => {
  return (
      <GlobalProvider>
          <Routing/>
      </GlobalProvider>
  )
}

export default App
