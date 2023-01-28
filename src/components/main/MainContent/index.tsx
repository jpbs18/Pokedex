import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Container, List } from './style'
import { MyPokemon, MySpinner } from '../../index'
import PokemonCard from '../MainPokemonCard'

const MyContent = () => {
  const { list, noMatch, selected, setSelected } = useContext(AppContext)
  const selectPokemon = (id: number) => {
    setSelected({ ...selected, id, isSelected: true })
  }

  return (
        <Container className="Content-Container">
            {selected.isSelected
              ? <MyPokemon />
              : <>
           {noMatch
             ? <div className="NotFound-Container">
                    <h1>Sorry, we do not have what you are looking for!</h1>
                    <img src={`${process.env.PUBLIC_URL}/pokemon_fainted.webp`} alt="Pokemon not found!"
                         width={'30%'} height={'50%'}/>
                </div>
             : <List className="Content-List">
                    {list.length === 0
                      ? <MySpinner/>
                      : list.map(pokemon => {
                        return <PokemonCard key={pokemon.id} id={pokemon.id} picture={pokemon.picture}
                                            name={pokemon.name} type={pokemon.type} selectPokemon={selectPokemon}/>
                      })
                    }
                </List>
            }
            </>
        }
        </Container>
  )
}

export default MyContent
