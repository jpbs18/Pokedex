export const urlArray = Array.from({length: 494}, (x, i) => `https://pokeapi.co/api/v2/pokemon/${i+1}`)
export const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.substring(1)
export const getTotalLength = () => JSON.parse(localStorage.getItem("list") || "{}").length
