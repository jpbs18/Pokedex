import {pokemonUrl} from "./variables";

export const urlArray = Array.from({length: 494}, (x, i) => `${pokemonUrl}/${i+1}`)
export const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.substring(1)
export const getTotalLength = () => JSON.parse(localStorage.getItem("list") || "{}").length
