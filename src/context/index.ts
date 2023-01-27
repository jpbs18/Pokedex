import { createContext } from 'react'
import type { AppContextType, ModeContextType } from '../types'

export const AppContext = createContext<AppContextType>({
  list: [],
  setList: () => null,
  types: ['Loading'],
  noMatch: false,
  setNoMatch: () => null,
  selected: { id: 0, isSelected: false },
  setSelected: () => null
})

export const ModeContext = createContext<ModeContextType>({
  darkMode: false,
  setDarkMode: () => null
})
