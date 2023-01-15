import {Container, List, Item, Title, Button, ListContainer} from "./style"
import {generations} from "../../utils/variables";
import {AppContext} from "../../context";
import {useContext} from "react";
import {capitalize} from "../../utils/functions";
import {Pokemon} from "../../types";

export default () => {

    const {types, setList, setNoMatch} = useContext(AppContext)

    const filterByGeneration = (data: number[]) => {
        const pokemonList = JSON.parse(localStorage.getItem("list") || "{}")
        setList(pokemonList.slice(data[0], data[1]))
    }

    const filterByType = (data: string) => {
        const pokemonList = JSON.parse(localStorage.getItem("list") || "{}")
        const filteredData = pokemonList.filter((pokemon: Pokemon) => pokemon.type === data)

        if(filteredData.length > 0) {
            setList(filteredData)
            setNoMatch(false)
        }

        else setNoMatch(true)
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
                    {types.map((type,i) => {
                        return <Item key={`Type-${type.name}-${i}`}>
                            <Button onClick={() => filterByType(type.name)}>{capitalize(type.name)}</Button>
                        </Item>
                    })}
                </List>
            </ListContainer>
        </Container>
    )
}