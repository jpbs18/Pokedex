import {createContext} from "react";
import {AppContextType, ModeContextType} from "../types";

export const AppContext= createContext<AppContextType>({
    list: [{
        picture:"", name:"", id:0, type:"", height:0, weight:0,
        stats:[{
            ["base_stat"]: 0,
            effort: 0,
            stat:{
                name:"",
                url:""
            }
        }
        ]
    }],
    setList: () => null,
    types: [],
    noMatch: false,
    setNoMatch: () => null,
    selected:{id:0, isSelected:false},
    setSelected: () => null
})

export const ModeContext = createContext<ModeContextType>({
    darkMode: false,
    setDarkMode: () => null
})