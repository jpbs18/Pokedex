import {Dispatch, SetStateAction} from "react";

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
        stat:{
            name:string,
            url:string
        }[]
    }[]
}

export interface Type{
    name:string,
    url:string
}

export interface AppContextType{
    list:Pokemon[],
    setList:Dispatch<SetStateAction<Pokemon[]>>,
    types:Type[],
    noMatch:boolean,
    setNoMatch:Dispatch<SetStateAction<boolean>>,
    selected:{id:number, isSelected:boolean},
    setSelected:Dispatch<SetStateAction<{id:number, isSelected:boolean}>>
}

export interface ModeContextType{
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

