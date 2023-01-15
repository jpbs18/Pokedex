import {Container, List, Item, Title, Button, ListContainer} from "./style"
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
        <Container>
            <ListContainer>
                <Title>Search by generation:</Title>
                <List>
                    {generations.map((gen,i) => {
                        return <Item key={`Gen-${gen.name}-${i}`}><Button onClick={() => filterByGeneration(gen.gap)}>
                            {gen.name}
                        </Button></Item>
                    })}
                </List>
            </ListContainer>

            <ListContainer>
                <Title>Search by type:</Title>
                <List>
                    {types.map((type,i) => <Item key={`Type-${type}-${i}`}><Button>{type}</Button></Item>)}
                </List>
            </ListContainer>
        </Container>
    )
}