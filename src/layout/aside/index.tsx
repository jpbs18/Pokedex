import {Container, List, Item, Button} from "./style"
export default () => {

    return(
        <Container className="Aside-Container">

            <List className="Aside-List">
                <h4>Search by Generation:</h4>
                <Item className="Item-List">
                    <Button>1º Gen</Button>
                    <Button>2º Gen</Button>
                    <Button>3º Gen</Button>
                    <Button>4º Gen</Button>
                </Item>
            </List>

            <List className="Aside-List">
                <h4>Search by Type:</h4>
                <Item className="Item-List">
                    <Button>Water</Button>
                    <Button>Ice</Button>
                    <Button>Fire</Button>
                    <Button>Grass</Button>
                    <Button>Bug</Button>
                    <Button>Poison</Button>
                    <Button>Electric</Button>
                    <Button>Psychic</Button>
                    <Button>Normal</Button>
                    <Button>Dark</Button>
                    <Button>Dragon</Button>
                    <Button>Fairy</Button>
                    <Button>Ground</Button>
                    <Button>Steel</Button>
                    <Button>Rock</Button>
                    <Button>Fighting</Button>
                    <Button>Ghost</Button>
                    <Button>Flying</Button>
                </Item>
            </List>
        </Container>
    )
}