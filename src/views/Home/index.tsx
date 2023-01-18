import React, {useEffect, useState} from 'react';
import './app.css';
import {MyHeader, MyMain, MyAside,MyFooter} from "../../layout"

export default () => {
    return (
        <div className="App-Container">
            <MyHeader/>
            <MyAside/>
            <MyMain/>
            <MyFooter/>
        </div>
    );
}