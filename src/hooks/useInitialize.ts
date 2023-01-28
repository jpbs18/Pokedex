import { useEffect, useState } from 'react'
import type { Pokemon } from '../types'
import { urlArray } from '../utils/functions'

const useInitialize = () => {
  const [list, setList] = useState<Pokemon[]>(localStorage.getItem('list') === null
    ? []
    : JSON.parse(localStorage.getItem('list')!))
  const [types, setTypes] = useState<string[]>(localStorage.getItem('types') === null
    ? ['Loading...']
    : JSON.parse(localStorage.getItem('types')!))

  useEffect(() => {
    if (localStorage.getItem('list') !== null) return

    const myAbortController = new AbortController()
    const getDetailsData = async () => {
      const detailsData = urlArray.map(async (url: string) => {
        const response = await fetch(url, { signal: myAbortController.signal })
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
      const uniqueTypes = [...new Set(payload.map((pokemon: Pokemon) => pokemon.type))]
      setTypes(uniqueTypes)
      localStorage.setItem('types', JSON.stringify(uniqueTypes))

      return () => { myAbortController.abort() }
    }

    void getDetailsData().then(console.log)
  }, [])

  return { list, setList, types }
}

export default useInitialize
