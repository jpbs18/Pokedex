import {createContext} from "react";
import {AppContextType, ModeContextType} from "../types";

export const AppContext= createContext<AppContextType>({
    list: [{
        picture:"",
        name:"",
        id:0,
        type:""
    }],
    setList: () => null,
    types: [],
    noMatch: false,
    setNoMatch: () => null
})

export const ModeContext = createContext<ModeContextType>({
    darkMode: false,
    setDarkMode: () => null
})