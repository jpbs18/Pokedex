import {Container} from "./style"
import {useContext} from "react";
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";

export default () => {

    const {list, selected, setSelected} = useContext(AppContext)
    const pokemon = list.filter(pokemon => pokemon.id === selected.id)[0]

    return(
        <Container>
            <div>
                <button onClick={() => setSelected({...selected, id:0, isSelected:false})}>
                    Main Page
                </button>
            </div>

            <div>
                <h1>{`You chose ${capitalize(pokemon.name)}!`}</h1>
            </div>

            <div>
                <img src={`${pokemon.picture}`} alt={`Picture of ${pokemon.name}`}/>
                <p>{`ID: #${pokemon.id}`}</p>
                <p>{`Type: ${pokemon.type}`}</p>
                <p>{`Weight: ${pokemon.weight}`}</p>
                <p>{`Height: ${pokemon.height}`}</p>
            </div>
        </Container>
    )
}