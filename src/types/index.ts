import {createContext, Dispatch, SetStateAction} from "react";

export interface Pokemon{
    picture:string,
    name:string,
    id:number
}

export interface AppContextType{
    list:Pokemon[],
    setList:Dispatch<SetStateAction<Pokemon[]>>
}


export const AppContext= createContext<AppContextType>({
    list: [{
        picture:"",
        name:"",
        id:0
    }],
    setList: () => null
})