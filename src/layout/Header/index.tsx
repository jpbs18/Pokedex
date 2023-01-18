import "./style"
import {useContext} from "react";
import {useLocation} from "react-router-dom"
import {ModeContext} from "../../context";
import {Button, Container, List} from "./style"
import {Link} from "react-router-dom"

export default () => {

    const {darkMode, setDarkMode} = useContext(ModeContext)
    const location = useLocation()

    const handleDarkMode = () => {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode))
        setDarkMode(!darkMode)
    }

    return(
        <Container className="Header-Container">
            <nav>
                <List>
                    {location.pathname === "/" ?
                        <li><Link to="/about"><Button>About</Button></Link></li> :
                        <li><Link to="/"><Button>Home</Button></Link></li>
                    }
                </List>
            </nav>
            <img src={`${process.env.PUBLIC_URL}/pokemon_logo.webp`} alt="Pokemon logo" width={"23%"} height={"85%"}/>
            <Button onClick={handleDarkMode}>{darkMode ? "🌕" : "🌑"}</Button>
        </Container>
    )
}