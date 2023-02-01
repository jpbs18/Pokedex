import React, { createContext, useState } from 'react'
import type { AppContextType, ChildrenProps } from '../../types'
import useInitialize from '../../hooks/useInitialize'

const APP_DEFAULT = {
  list: [],
  setList: () => null,
  types: ['Loading'],
  noMatch: false,
  setNoMatch: () => null,
  selected: { id: 0, isSelected: false },
  setSelected: () => null
}
const AppContext = createContext<AppContextType>(APP_DEFAULT)
export const ApplicationProvider = (props: ChildrenProps) => {
  const { list, setList, types } = useInitialize()
  const [noMatch, setNoMatch] = useState(false)
  const [selected, setSelected] = useState({ id: 0, isSelected: false })

  return (
      <AppContext.Provider value={ { list, setList, types, noMatch, setNoMatch, selected, setSelected } }>
        { props.children }
      </AppContext.Provider>
  )
}
export default AppContext
