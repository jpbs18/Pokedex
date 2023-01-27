import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Pokemon } from '../types'
import { urlArray } from '../utils/functions'

const useInitialize = () => {
  const [list, setList] = useState<Pokemon[]>([])
  const [types, setTypes] = useState<string[]>(['Loading...'])

  useEffect(() => {
    if ((localStorage.getItem('list') != null) && (localStorage.getItem('types') != null)) {
      setList(JSON.parse(localStorage.getItem('list')!))
      setTypes(JSON.parse(localStorage.getItem('types')!))
      return
    }
    const getDetailsData = async () => {
      const detailsData = urlArray.map(async (element: string) => {
        const response = await axios.get(element)
        return response.data
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
      const uniqueTypes = [...new Set(payload.map((pokemon: Pokemon) => pokemon.type))]
      setTypes(uniqueTypes)
      localStorage.setItem('types', JSON.stringify(uniqueTypes))
    }

    void getDetailsData().then(console.log)
  }, [])

  return { list, setList, types }
}

export default useInitialize
