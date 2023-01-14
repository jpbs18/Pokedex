import React, {useEffect, useState} from 'react';
import './App.css';
import MyHeader from "./layout/header"
import MyFooter from "./layout/footer"
import MyAside from "./layout/aside"
import MyMain from "./layout/main"
import {Pokemon} from "./types";
import {AppContext, ModeContext} from "./context";
import {urlArray} from "./utils";
import {ThemeProvider} from "styled-components"
import {theme} from "./theme";


export default () => {

    const [list, setList] = useState([{ picture:"", name:"", id:0 }])
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const getDetailsData = async() => {

            if(localStorage.getItem("darkMode")){
                console.log(Boolean(localStorage.getItem("darkMode")))
                setDarkMode(Boolean(localStorage.getItem("darkMode")))
            }

            if(localStorage.getItem("list")){
                setList(JSON.parse(localStorage.getItem("list") || "{}"))
                return
            }

            const detailsData = urlArray.map(async (element: any) => {
                const data = await fetch(element)
                return data.json()
            })

            const payload: Pokemon[] = (await Promise.all(detailsData)).map(data => ({
                picture: data.sprites.other["official-artwork"].front_default,
                name: data.name,
                id: data.id,
            }))

            setList(payload)
            localStorage.setItem("list", JSON.stringify(payload))
            localStorage.setItem("darkMode", String(darkMode))
        }

        getDetailsData().then(console.log)
    },[])

  return (
      <div className="App-Container">
          <ThemeProvider theme={darkMode ? theme.darkMode : theme.lightMode}>
          <ModeContext.Provider value={{darkMode,setDarkMode}}>
            <MyHeader/>
            <AppContext.Provider value={{list, setList}}>
                <MyAside/>
                <MyMain/>
            </AppContext.Provider>
          <MyFooter/>
        </ModeContext.Provider>
        </ThemeProvider>
      </div>
  );
}


