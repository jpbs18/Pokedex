import "./style"
import {useContext} from "react";
import {ModeContext} from "../../context";
import {Button, Container} from "./style"

export default () => {

    const {darkMode, setDarkMode} = useContext(ModeContext)

    return(
        <Container className="Header-Container">
            <img src={`${process.env.PUBLIC_URL}/pokemon_logo.png`} alt="Pokemon logo" width={"20%"} height={"80%"}/>
            <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "🌕" : "🌑"}</Button>
        </Container>
    )
}