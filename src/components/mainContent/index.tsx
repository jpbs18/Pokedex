import {useContext} from "react"
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";
import {Container, List, Item, Img} from "./style"

export default () => {

    const {list, noMatch} = useContext(AppContext)

    return(
        <Container className="Content-Container">
            {noMatch ?
                <div className="NotFound-Container">
                    <h1>Sorry, we don't have what you're looking for!</h1>
                    <img src={`${process.env.PUBLIC_URL}/pokemon_fainted.webp`} alt={"Pokemon not found!"}
                         width={"30%"} height={"50%"}/>
                </div>
                :
                <List className="Content-List">
                    {list.map(pokemon => {
                        return <Item key={pokemon.id}>
                                    <Img src={pokemon.picture} alt={`Picture of ${pokemon.name}`}/>
                                    <span>{`#${pokemon.id} - ${capitalize(pokemon.name)}`}</span>
                                </Item>
                    })}
                </List>
            }
        </Container>
    )
}