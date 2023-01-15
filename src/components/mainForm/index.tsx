import "./style.css"
import {FormProps} from "../../types";
import React, {useContext, useState} from "react";
import {AppContext} from "../../context";

export default (props: FormProps) => {

    const {setList} = useContext(AppContext)
    const [currentName, setCurrentName] = useState("");

    const filterByName = () => {
        const data = JSON.parse(localStorage.getItem("list") || "{}")
        const filteredData = data.filter((pokemon: { name: string | string[]; }) => pokemon.name.includes(currentName))
        if(filteredData.length > 0) setList(filteredData)
        else props.setNoMatch(true)
    }

    const cleanFilter = () => {
        setCurrentName("");
        props.setNoMatch(false)
        setList(JSON.parse(localStorage.getItem("list") || "{}"))
    }

    return(
        <div className="Form-Container">
            <h4>Search by name:</h4>
            <input type="text" value={currentName} onChange={e => setCurrentName(e.target.value)}/>
            <button onClick={filterByName}>🔍</button>
            <button onClick={cleanFilter}>🌊</button>
        </div>
    )
}


