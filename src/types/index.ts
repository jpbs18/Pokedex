import {Dispatch, SetStateAction} from "react";

export interface Pokemon{
    picture:string,
    name:string,
    id:number,
    type:string
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
    setNoMatch:Dispatch<SetStateAction<boolean>>
}

export interface ModeContextType{
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

