import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { MyHeader } from '../index'
import ModeContext from '../../context/mode'

const renderComponent = (bool = false, func?: () => void) => {
  const darkMode = bool
  const setDarkMode = () => {
    func?.()
  }

  return render(
        <ModeContext.Provider value={{ darkMode, setDarkMode }}>
            <MemoryRouter>
                <MyHeader/>
            </MemoryRouter>
        </ModeContext.Provider>
  )
}

test('Header should render 2 buttons and 1 image', () => {
  renderComponent()

  const buttons = screen.getAllByRole('button')
  const image = screen.getByRole('img')

  expect(buttons).toHaveLength(2)
  expect(image).toBeInTheDocument()
})

test('Header should render navigation button with text "About" on Home page and not "Home"', () => {
  renderComponent()

  const navigationButton = screen.getByText('About')
  const navigationButton2 = screen.queryByText('Home')

  expect(navigationButton).toHaveAccessibleName('About')
  expect(navigationButton2).not.toBeInTheDocument()
})

test('Header should render navigation button with text "Home" on About page and not "About"', () => {
  renderComponent()

  const navigationButton = screen.getByText('About')
  user.click(navigationButton)

  const newNavigationButton = screen.getByText('Home')
  const newNavigationButton2 = screen.queryByText('About')

  expect(newNavigationButton).toBeInTheDocument()
  expect(newNavigationButton2).not.toBeInTheDocument()
})

test('When in darkMode, theme button should have the text "Light"', () => {
  renderComponent(true)

  const darkButton = screen.queryByText('Dark')
  const lightButton = screen.getByText('Light')

  expect(lightButton).toBeInTheDocument()
  expect(darkButton).not.toBeInTheDocument()
})

test('When theme button is pressed, setDarkMode should be called', () => {
  const mock = jest.fn()
  renderComponent(false, mock)

  const themeButton = screen.getByText('Dark')
  user.click(themeButton)

  expect(mock).toHaveBeenCalled()
})
