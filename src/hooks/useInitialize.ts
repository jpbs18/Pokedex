import { useEffect, useState } from 'react'
import type { Pokemon } from '../types'
import { urlArray } from '../utils/functions'

const useInitialize = () => {
  const [list, setList] = useState([{
    picture: '',
    name: '',
    id: 0,
    type: '',
    weight: 0,
    height: 0,
    stats: [{
      base_stat: 0,
      effort: 0,
      stat: { name: '', url: '' }
    }]
  }])
  const [types, setTypes] = useState(['Loading...'])

  useEffect(() => {
    if ((localStorage.getItem('list') != null) && (localStorage.getItem('types') != null)) {
      setList(JSON.parse(localStorage.getItem('list')!))
      setTypes(JSON.parse(localStorage.getItem('types')!))
      return
    }
    const getDetailsData = async () => {
      const detailsData = urlArray.map(async (element: string) => {
        const response = await fetch(element)
        return await response.json()
      })

      const payload = (await Promise.all(detailsData)).map(data => ({
        picture: data.sprites.other['official-artwork'].front_default,
        name: data.name,
        id: data.id,
        type: data.types[0].type.name,
        height: data.height,
        weight: data.weight,
        stats: data.stats
      }))

      setList(payload)
      localStorage.setItem('list', JSON.stringify(payload))
      setTypes([...new Set(payload.map((pokemon: Pokemon) => pokemon.type))])
      localStorage.setItem('types', JSON.stringify([...new Set(payload.map((pokemon: Pokemon) => pokemon.type))]))
    }

    void getDetailsData().then(console.log)
  }, [])

  return { list, setList, types }
}

export default useInitialize
