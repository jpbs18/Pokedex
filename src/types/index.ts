import {Dispatch, SetStateAction} from "react";

export interface Pokemon{
    picture:string,
    name:string,
    id:number
}

export interface AppContextType{
    list:Pokemon[],
    setList:Dispatch<SetStateAction<Pokemon[]>>
}

export interface ModeContextType{
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface MainProps{
    noMatch: boolean
}

export interface FormProps{
    setNoMatch: Dispatch<SetStateAction<boolean>>
}
