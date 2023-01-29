import { Container, List, Item, Title, Button, ListContainer } from './style'
import { generations } from '../../utils/variables'
import { AppContext } from '../../context'
import React, { useContext } from 'react'
import { capitalize } from '../../utils/functions'
import type { Pokemon } from '../../types'

const MyAside = () => {
  const { types, setList, setNoMatch, setSelected, selected } = useContext(AppContext)

  const filterByGeneration = (data: number[]) => {
    setSelected({ ...selected, id: 0, isSelected: false })
    const pokemonList = JSON.parse(localStorage.getItem('list')!)
    setList(pokemonList.slice(data[0], data[1]))
  }

  const filterByType = (type: string) => {
    setSelected({ ...selected, id: 0, isSelected: false })
    const pokemonList = JSON.parse(localStorage.getItem('list')!)
    const filteredData = pokemonList.filter((pokemon: Pokemon) => pokemon.type === type)

    if (filteredData.length > 0) {
      setList(filteredData)
      setNoMatch(false)
    } else setNoMatch(true)
  }

  return (
        <Container>
            <ListContainer>
                <Title>Search by generation:</Title>
                <List data-testid="generations">
                    {generations.map((gen, i) => {
                      return <Item key={`Gen-${gen.name}-${i}`}><Button onClick={() => filterByGeneration(gen.gap)}>
                            {gen.name}
                        </Button></Item>
                    })}
                </List>
            </ListContainer>

            <ListContainer>
                <Title>Search by type:</Title>
                <List data-testid="types">
                    {types.map((type: string, i: number) => {
                      return <Item key={`Type-${type}-${i}`}>
                            <Button onClick={() => filterByType(type)}>{capitalize(type)}</Button>
                        </Item>
                    })}
                </List>
            </ListContainer>
        </Container>
  )
}

export default MyAside
