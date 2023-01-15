import {FormProps} from "../../types";
import React, {useContext, useState} from "react";
import {AppContext} from "../../context";
import {Container, Button, Label} from "./style"
import {getTotalLength} from "../../utils/functions";


export default (props: FormProps) => {

    const {list, setList} = useContext(AppContext)
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
        <Container className="Form-Container">
            {list.length === getTotalLength() ||
                <span className="Counter">{`Found ${list.length}/${getTotalLength()} results`}</span>
            }
            <Label className="Label-Container">
                <label>Search by name:
                    <input type="text" value={currentName} onChange={e => setCurrentName(e.target.value)}/>
                </label>
                <Button onClick={filterByName}>🔍</Button>
                <Button onClick={cleanFilter}>🌊</Button>
            </Label>
        </Container>
    )
}


