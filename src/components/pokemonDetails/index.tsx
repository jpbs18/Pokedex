import {Container, Sub_Container, List, List_Container, Button, Button_Container} from "./style"
import {useContext} from "react";
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";

export default () => {

    const {list, selected, setSelected} = useContext(AppContext)
    const pokemon = list.filter(pokemon => pokemon.id === selected.id)[0]
    const lastPokemon = list[list.length - 1].id === selected.id
    const firstPokemon = list[0].id === selected.id

    const displayNextPokemon = () => {
        const currentIndex = list.findIndex(pokemon => pokemon.id === selected.id)
        setSelected({...selected, id:list[currentIndex + 1].id, isSelected:true})
    }

    const displayPreviousPokemon = () => {
        const currentIndex = list.findIndex(pokemon => pokemon.id === selected.id)
        setSelected({...selected, id:list[currentIndex - 1].id, isSelected:true})
    }

    return(
        <Container>
            <Button_Container>
                <Button onClick={() => setSelected({...selected, id:0, isSelected:false})}>
                    Main Page
                </Button>
            </Button_Container>

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

            <Button_Container>
                <Button onClick={displayPreviousPokemon} disabled={firstPokemon}>Previous</Button>
                <Button onClick={displayNextPokemon} disabled={lastPokemon}>Next</Button>
            </Button_Container>
        </Container>
    )
}