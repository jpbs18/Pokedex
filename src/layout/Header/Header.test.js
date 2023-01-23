import {screen, render} from "@testing-library/react"
import user from "@testing-library/user-event"
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import {MyHeader} from "../index"

const renderComponent = () => {
    return render(
        <MemoryRouter>
            <MyHeader/>
        </MemoryRouter>
    )
}

test("Header should render 2 buttons and 1 image", () => {
    renderComponent()

    const buttons = screen.getAllByRole("button")
    const image = screen.getByRole("img")

    expect(buttons).toHaveLength(2)
    expect(image).toBeInTheDocument()
})

test(`Header should render navigation button with text "About" on Home page and not "Home"`, () => {
    renderComponent()

    const navigationButton = screen.getByText("About")
    const navigationButton2 = screen.queryByText("Home")

    expect(navigationButton).toHaveAccessibleName("About")
    expect(navigationButton2).not.toBeInTheDocument()
})

test(`Header should render navigation button with text "Home" on About page and not "About"`, () => {
    renderComponent()

    const navigationButton = screen.getByText("About")
    user.click(navigationButton)

    const newNavigationButton = screen.getByText("Home")
    const newNavigationButton2 = screen.queryByText("About")

    expect(newNavigationButton).toBeInTheDocument()
    expect(newNavigationButton2).not.toBeInTheDocument()
})