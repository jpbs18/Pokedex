import React from 'react'
import './app.css'
import { MyHeader, MyMain, MyAside, MyFooter } from '../../layout'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Home = () => {
  const { innerWidth } = useWindowDimensions()

  return (
        <div className="App-Container">
            <MyHeader/>
            {innerWidth < 420 || <MyAside/>}
            <MyMain/>
            <MyFooter/>
        </div>
  )
}

export default Home
