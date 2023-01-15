import {FormProps} from "../../types";
import React, {useContext, useState, useMemo} from "react";
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

    const size = useMemo(() => getTotalLength(),[])

    return(
        <Container className="Form-Container">
            {list.length === getTotalLength() ||
                <span className="Counter">{`Found ${list.length}/${size} results`}</span>
            }
            <Label className="Label-Container">
                <h4>Search by name:</h4>
                <input type="text" value={currentName} onChange={e => setCurrentName(e.target.value)}/>
                <Button onClick={filterByName}>🔍</Button>
                <Button onClick={cleanFilter}>🌊</Button>
            </Label>
        </Container>
    )
}


