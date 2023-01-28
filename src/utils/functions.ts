import { pokemonUrl, typeColors } from './variables'

export const urlArray = Array.from({ length: 494 }, (x, i) => `${pokemonUrl}/${i + 1}`)
export const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.substring(1)
export const getTotalLength = (): number => JSON.parse(localStorage.getItem('list') ?? '{}').length
export const getColor = (pokemonType: string) => Object.entries(typeColors).find(cl => cl.includes(pokemonType))?.[1]
