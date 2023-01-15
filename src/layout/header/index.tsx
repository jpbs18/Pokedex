import "./style"
import {useContext} from "react";
import {ModeContext} from "../../context";
import {Button, Container} from "./style"

export default () => {

    const {darkMode, setDarkMode} = useContext(ModeContext)
    const handleDarkMode = () => {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode))
        setDarkMode(!darkMode)
    }

    return(
        <Container className="Header-Container">
            <img src={`${process.env.PUBLIC_URL}/pokemon_logo.webp`} alt="Pokemon logo" width={"21%"} height={"85%"}/>
            <Button onClick={handleDarkMode}>{darkMode ? "🌕" : "🌑"}</Button>
        </Container>
    )
}