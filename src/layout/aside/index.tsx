import {Container, List, Item, Button} from "./style"
import {generations, types} from "../../utils/variables";
import {AppContext} from "../../context";
import {useContext} from "react";

export default () => {

    const {setList} = useContext(AppContext)

    const filterByGeneration = (data: number[]) => {
        const pokemonList = JSON.parse(localStorage.getItem("list") || "{}")
        setList(pokemonList.slice(data[0], data[1]))
    }

    return(
        <Container className="Aside-Container">
            <List className="Aside-List">
                <h4>Search by Generation:</h4>
                <Item className="Item-List">
                    {generations.map((gen,i) => {
                        return <Button key={`Gen-${gen.name}-${i}`} onClick={() => filterByGeneration(gen.gap)}>
                            {gen.name}
                        </Button>
                    })}
                </Item>
            </List>

            <List className="Aside-List">
                <h4>Search by Type:</h4>
                <Item className="Item-List">
                    {types.map((type,i) => <Button key={`Type-${type}-${i}`}>{type}</Button>)}
                </Item>
            </List>
        </Container>
    )
}