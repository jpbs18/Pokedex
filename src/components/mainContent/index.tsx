import "./style.css"
import {useContext} from "react"
import {MainProps} from "../../types"
import {AppContext} from "../../context";
import {capitalize} from "../../utils/functions";

export default (props: MainProps) => {

    const {list} = useContext(AppContext)
    const pokemonList = list[0].name !== "" ? list : []

    return(
        <div className="Content-Container">
            {props.noMatch ?
                <div className="NotFound-Container">
                    <h1>Sorry, we don't have results for that name!</h1>
                    <img src={`${process.env.PUBLIC_URL}/pokemon_fainted.jpg`} alt={"Pokemon not found!"}
                         width={"30%"} height={"50%"}/>
                </div>
                :
                <ul className="Content-List">
                    {pokemonList.map(pokemon => {
                        return <li key={pokemon.id}>
                                    <img src={pokemon.picture} alt={`Picture of ${pokemon.name}`}/>
                                    <span>{`#${pokemon.id} - ${capitalize(pokemon.name)}`}</span>
                                </li>
                    })}
                </ul>
            }
        </div>
    )
}