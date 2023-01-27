import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MyFooter } from '../index'

test('should render a paragraph with the expected text', () => {
  render(<MyFooter/>)

  expect(
    screen.getByText('Created by João Santos')
  ).toBeInTheDocument()
})
