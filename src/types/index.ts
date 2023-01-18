import {Dispatch, SetStateAction} from "react";

interface Stat{
    name:string,
    url:string
}

export interface Pokemon{
    picture:string,
    name:string,
    id:number,
    type:string,
    weight:number,
    height:number,
    stats:{
        ["base_stat"]: number,
        effort:number,
        stat:Stat
    }[]
}


export interface AppContextType{
    list:Pokemon[],
    setList:Dispatch<SetStateAction<Pokemon[]>>,
    types:string[],
    noMatch:boolean,
    setNoMatch:Dispatch<SetStateAction<boolean>>,
    selected:{id:number, isSelected:boolean},
    setSelected:Dispatch<SetStateAction<{id:number, isSelected:boolean}>>
}

export interface ModeContextType{
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

