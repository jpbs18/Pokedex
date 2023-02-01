import React from 'react'
import { ModeProvider } from './mode'
import { ApplicationProvider } from './app'
import type { ChildrenProps } from '../types'

const GlobalProvider = (props: ChildrenProps) => {
  return (
      <ModeProvider>
          <ApplicationProvider>
              {props.children}
          </ApplicationProvider>
      </ModeProvider>
  )
}

export default GlobalProvider
