import "./style.css"
import {useContext} from "react"
import {AppContext} from "../../types"

export default () => {

    const {list, setList} = useContext(AppContext)
    const pokemonList = list.length > 1 ? list : []

    return(
        <div className="Content-Container">
            <ul className="Content-List">
                {pokemonList.map(e => {
                    return <li key={e.id}>
                        <img src={e.picture} alt={`Picture of ${e.name}`}/>
                        <span>{`#${e.id} - ${e.name}`}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}