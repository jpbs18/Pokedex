import {Container, Table, Table_Container, Table_List, Button, Button_Container, Img, Heading} from "./style"
import {useContext} from "react";
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";
import {statsList} from "../../utils/variables";

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
                <div>
                    <Heading>{`You chose ${capitalize(pokemon.name)}!`}</Heading>
                    <Img src={`${pokemon.picture}`} alt={`Picture of ${pokemon.name}`}/>
                </div>

                <Table_Container>
                    <Table>
                        <thead>
                            <td width="50%">Stats</td>
                            <td width="50%">Value</td>
                        </thead>
                        <tbody>
                            <td>
                                <Table_List>
                                    {statsList.map((stat,i) => <li key={i+10}><tr>{stat}</tr></li>)}
                                </Table_List>
                            </td>
                            <td>
                                <Table_List>
                                    <li><tr>{pokemon.id}</tr></li>
                                    <li><tr>{pokemon.type}</tr></li>
                                    <li><tr>{pokemon.height}</tr></li>
                                    <li><tr>{pokemon.weight}</tr></li>
                                    {pokemon.stats.map((elem,i) =>
                                        <li key={i+20}><tr>{elem["base_stat"]}</tr></li>)}
                                </Table_List>
                            </td>
                        </tbody>
                    </Table>
                </Table_Container>

                <Button_Container>
                    <Button onClick={displayPreviousPokemon} disabled={firstPokemon}>Previous</Button>
                    <Button onClick={displayNextPokemon} disabled={lastPokemon}>Next</Button>
                    <Button onClick={() => setSelected({...selected, id:0, isSelected:false})}>Main Page</Button>
                </Button_Container>
        </Container>
    )
}