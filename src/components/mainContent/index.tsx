import {useContext} from "react"
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";
import {Container, List, Item, Img} from "./style"
import {MyPokemon} from "../../components/index"

export default () => {

    const {list, noMatch, selected, setSelected} = useContext(AppContext)
    const selectPokemon = (id: number) => {
        setSelected({...selected, id: id, isSelected: true})
    }

    return(
        <Container className="Content-Container">
            {selected.isSelected ?
                <MyPokemon />
            :
           <>
           {noMatch ?
                <div className="NotFound-Container">
                    <h1>Sorry, we don't have what you're looking for!</h1>
                    <img src={`${process.env.PUBLIC_URL}/pokemon_fainted.webp`} alt="Pokemon not found!"
                         width={"30%"} height={"50%"}/>
                </div>
                :
                <List className="Content-List">
                    {list.map(pokemon => {
                        return <Item key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
                                    <Img src={pokemon.picture} alt={`Picture of ${pokemon.name}`} loading="lazy"/>
                                    <span>{`#${pokemon.id} - ${capitalize(pokemon.name)}`}</span>
                                </Item>
                    })}
                </List>
            }
            </>
        }
        </Container>
    )
}