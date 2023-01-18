import {Home, About} from "./views"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {typeUrl} from "./utils/variables";
import {urlArray} from "./utils/functions";
import {theme} from "./theme";
import {ThemeProvider} from "styled-components";
import { ModeContext, AppContext } from "./context";

export default () => {

    const [list, setList] = useState([{picture:"", name:"", id:0, type:"", weight:0, height:0,
        stats:[{
                ["base_stat"]:0,
                effort:0,
                stat:{ name:"", url:"" }
               }]
            }])

    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
    const [types, setTypes] = useState([])
    const [noMatch, setNoMatch] = useState(false)
    const [selected, setSelected] = useState({id:0, isSelected:false})

    useEffect(() => {

        if(localStorage.getItem("list") && localStorage.getItem("types")){
            setList(JSON.parse(localStorage.getItem("list") || "{}"))
            setTypes(JSON.parse(localStorage.getItem("types") || "{}"))
            return
        }
        const getDetailsData = async() => {

            const typesData = async() => {
                const response = await fetch(typeUrl)
                const json = await response.json()
                setTypes(json.results)
                localStorage.setItem("types", JSON.stringify(json.results))
            }

            const detailsData = urlArray.map(async (element: any) => {
                const response = await fetch(element)
                return response.json()
            })

            const payload = (await Promise.all(detailsData)).map(data => ({
                picture: data.sprites.other["official-artwork"].front_default,
                name: data.name,
                id: data.id,
                type: data.types[0].type.name,
                height: data.height,
                weight: data.weight,
                stats: data.stats
            }))

            await typesData()
            setList(payload)
            localStorage.setItem("list", JSON.stringify(payload))
        }

        getDetailsData().then(console.log)
    },[])


    return(
        <ThemeProvider theme={darkMode ? theme.darkMode : theme.lightMode}>
            <ModeContext.Provider value={{darkMode,setDarkMode}}>
                <AppContext.Provider value={{list, setList, types, noMatch, setNoMatch, selected, setSelected}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/about" element={<About/>}></Route>
                        </Routes>
                    </BrowserRouter>
                </AppContext.Provider>
            </ModeContext.Provider>
        </ThemeProvider>
    )
}

