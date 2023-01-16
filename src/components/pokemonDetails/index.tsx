import {Container, Sub_Container, List, List_Container} from "./style"
import {useContext} from "react";
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export default () => {

    const {list, selected, setSelected} = useContext(AppContext)
    const pokemon = list.filter(pokemon => pokemon.id === selected.id)[0]

    const displayNextPokemon = () => {
        const totalLength = JSON.parse(localStorage.getItem("list") || "{}").length
        if(selected.id < totalLength) setSelected({...selected, id:selected.id + 1, isSelected:true})
        return
    }

    const displayPreviousPokemon = () => {
        if(selected.id > 1) setSelected({...selected, id:selected.id - 1, isSelected:true})
        return
    }

    return(
        <Container>
            <div>
                <button onClick={() => setSelected({...selected, id:0, isSelected:false})}>
                    Main Page
                </button>
            </div>

            <Sub_Container>
                <List_Container>
                    <List>
                        <li><p>{`ID: #${pokemon.id}`}</p></li>
                        <li><p>{`Type: ${capitalize(pokemon.type)}`}</p></li>
                        <li><p>{`Weight: ${pokemon.weight}`}</p></li>
                        <li><p>{`Height: ${pokemon.height}`}</p></li>
                    </List>
                </List_Container>

                <div>
                    <h1>{`You chose ${capitalize(pokemon.name)}!`}</h1>
                    <img src={`${pokemon.picture}`} alt={`Picture of ${pokemon.name}`}/>
                </div>

                <List_Container>
                    <List>
                        {pokemon.stats.map((elem,i) => {
                            return <li key={`${elem}-${i}`}>
                                <p>{capitalize(elem.stat.name)}: {elem["base_stat"]}</p>
                            </li>
                        })}
                    </List>
                </List_Container>
            </Sub_Container>
            <div>
                <button onClick={displayPreviousPokemon}>Previous</button>
                <button onClick={displayNextPokemon}>Next</button>
            </div>
        </Container>
    )
}