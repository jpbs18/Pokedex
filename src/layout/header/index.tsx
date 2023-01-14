import "./style"
import {useContext} from "react";
import {ModeContext} from "../../context";
import {Button, Container} from "./style"

export default () => {

    const {darkMode, setDarkMode} = useContext(ModeContext)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem("darkMode", String(!darkMode))
    }

    return(
        <Container className="Header-Container">
            <img src={`${process.env.PUBLIC_URL}/pokemon_logo.png`} alt="Pokemon logo" width={"20%"} height={"80%"}/>
            <Button onClick={handleDarkMode}>{darkMode ? "🌕" : "🌑"}</Button>
        </Container>
    )
}