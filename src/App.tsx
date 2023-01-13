import React, {useEffect, useState} from 'react';
import './App.css';
import MyHeader from "./layout/header"
import MyFooter from "./layout/footer"
import MyAside from "./layout/aside"
import MyMain from "./layout/main"
import {Pokemon, AppContext} from "./types";


export default () => {

    const [list, setList] = useState([{ picture:"", name:"", id:0 }])

    useEffect(() => {

        const urlArr = Array.from({length: 494}, (x, i) => `https://pokeapi.co/api/v2/pokemon/${i+1}`)
        const getDetailsData = async() => {
            const detailsData = urlArr.map(async (element: any) => {
                const data = await fetch(element)
                return data.json()
            })

            const payload: Pokemon[] = (await Promise.all(detailsData)).map(data => ({
                picture: data.sprites.other["official-artwork"].front_default,
                name: data.name,
                id: data.id,

            }))

            setList(payload)
        }

        getDetailsData().then(console.log)
    },[])

  return (
      <div className="App-Container">
          <MyHeader/>
          <AppContext.Provider value={{list, setList}}>
            <MyAside/>
            <MyMain/>
          </AppContext.Provider>
          <MyFooter/>
      </div>
  );
}


