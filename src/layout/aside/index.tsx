import "./style.css"
export default () => {
    return(
        <aside className="Aside-Container">

            <ul className="Aside-List">
                <h4>Search by Generation:</h4>
                <li className="Item-List">
                    <button>1º Gen</button>
                    <button>2º Gen</button>
                    <button>3º Gen</button>
                    <button>4º Gen</button>
                </li>
            </ul>

            <ul className="Aside-List">
                <h4>Search by Type:</h4>
                <li className="Item-List">
                    <button>Water</button>
                    <button>Ice</button>
                    <button>Fire</button>
                    <button>Grass</button>
                    <button>Bug</button>
                    <button>Poison</button>
                    <button>Electric</button>
                    <button>Psychic</button>
                    <button>Normal</button>
                    <button>Dark</button>
                    <button>Dragon</button>
                    <button>Fairy</button>
                    <button>Ground</button>
                    <button>Steel</button>
                    <button>Rock</button>
                    <button>Fighting</button>
                    <button>Ghost</button>
                    <button>Flying</button>
                </li>
            </ul>
        </aside>
    )
}