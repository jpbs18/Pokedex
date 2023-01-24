import { render, screen, within } from "@testing-library/react"
import '@testing-library/jest-dom'
import { MyAside } from "../index"
import { AppContext } from "../../context";

const renderComponent = () => {

    const types = ["Water", "Fire", "Electric", "Ground", "Steel", "Normal", "Fighting", "Fairy", "Dragon",
        "Psychic", "Grass", "Bug", "Rock", "Ice", "Poison", "Ghost", "Dark"]

    const noMatch = false;

    const list = [{picture:"", name:"", id:0, type:"", weight:0, height:0,
        stats:[{
            ["base_stat"]:0,
            effort:0,
            stat:{ name:"", url:"" }
        }]
    }]

    const selected = {id:0, isSelected:false}
    const setList = () => null
    const setNoMatch = () => null
    const setSelected = () => null

    render(
        <AppContext.Provider value={{list, setList, types, noMatch, setNoMatch, selected, setSelected}}>
            <MyAside/>
        </AppContext.Provider>
    )

    return [types]
}


test("Aside should have 2 lists, 2 titles and 21 buttons", () => {
    renderComponent()

    const lists = screen.getAllByRole("list")
    const buttons = screen.getAllByRole("button")
    const titleOne = screen.getByText("Search by generation:")
    const titleTwo = screen.getByText("Search by type:")

    expect(buttons).toHaveLength(21)
    expect(lists).toHaveLength(2)
    expect(titleOne).toBeInTheDocument()
    expect(titleTwo).toBeInTheDocument()
})

test("Should render 4 generation buttons and 17 type buttons", () => {
    renderComponent()

    const generationButtons = within(screen.getByTestId("generations")).getAllByRole("button")
    const typeButtons = within(screen.getByTestId("types")).getAllByRole("button")

    expect(generationButtons).toHaveLength(4)
    expect(typeButtons).toHaveLength(17)
})

test("Should render all type buttons with the correspondent text", () => {
    const [types] = renderComponent()

    for(let type of types){
        expect(
            screen.getByRole("button", { name: new RegExp(type) })
        ).toBeInTheDocument()
    }
})