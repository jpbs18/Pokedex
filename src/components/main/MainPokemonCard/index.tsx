import { Details, Img, Item, Type } from './style'
import { capitalize, getColor } from '../../../utils/functions'
import React from 'react'
import type { CardProps } from '../../../types'

const PokemonCard = (props: CardProps) => {
  const { id, name, picture, type, selectPokemon } = props

  return <Item onClick={() => { selectPokemon(id) }}>
            <Img src={picture} alt={`Picture of ${name}`} loading="lazy"/>
            <Details>
                <div>{`#${id} - ${capitalize(name)}`}</div>
                <Type color={getColor(type)}>{capitalize(type)}</Type>
            </Details>
        </Item>
}

export default PokemonCard
