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

                <Item className="Item-List">
                    {generations.map((gen,i) => {
                        return <li key={`Gen-${gen.name}-${i}`}><Button onClick={() => filterByGeneration(gen.gap)}>
                            {gen.name}
                        </Button></li>
                    })}
                </Item>
            </List>

            <List className="Aside-List">

                <Item className="Item-List">
                    {types.map((type,i) => <li key={`Type-${type}-${i}`}><Button>{type}</Button></li>)}
                </Item>
            </List>
        </Container>
    )
}